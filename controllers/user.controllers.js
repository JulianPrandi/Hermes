const User = require("../model/User");
//const passport = require("../config/passport");
var passport = require("passport");
var path = require("path");

//const renderSignUpForm = (req, res) => res.render("users/signup");
const renderSignUpForm = (req, res) => {
  //let a = path.join(__dirname, "../public/index.html");
  //res.sendFile("../public/index.html");
  //console.log("PATH: ", a);
  //res.sendFile(path.join(__dirname, "../public/singUpForm.html"));
  res.redirect("../../signUpForm.html");
  //res.send("<h1><center>Trae La Unidad</center></h1>");
};

const signup = async (req, res) => {
  let errors = [];
  const { name, email, password, confirm_password } = req.body;
  if (password != confirm_password) {
    errors.push({ text: "Passwords do not match." });
  }
  if (password.length < 4) {
    errors.push({ text: "Passwords must be at least 4 characters." });
  }
  if (errors.length > 0) {
    res.render("users/signup", {
      errors,
      name,
      email,
      password,
      confirm_password,
    });
  } else {
    // Look for email coincidence
    const emailUser = await User.findOne({ email: email });
    if (emailUser) {
      req.flash("error_msg", "The Email is already in use.");
      res.redirect("/users/signup");
    } else {
      // Saving a New User
      const newUser = new User({ name, email, password });
      newUser.password = await newUser.encryptPassword(password);
      await newUser.save();
      req.flash("success_msg", "You are registered.");
      res.redirect("/users/signin");
    }
  }
};

//const renderSigninForm = (req, res) => res.render("users/signin");
const renderSigninForm = (req, res) =>
  res.sendFile("../public/singUpForm.html");

const login = passport.authenticate("local", {
  successRedirect: "/index",
  failureRedirect: "/users/signin",
  failureFlash: true,
});

const logout = (req, res) => {
  req.logout();
  req.flash("success_msg", "You are logged out now.");
  res.redirect("/users/signin");
};

module.exports = {
  renderSignUpForm,
  signup,
  renderSigninForm,
  login,
  logout,
};
