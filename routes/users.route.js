var express = require("express");
var router = express.Router();
/*var {
  createNewUser,
  renderSignUpForm,
  singup,
  renderSigninForm,
  signin,
  logout,
} = require("../controllers/user.controllers");*/
var controllers = require("../controllers/user.controllers");

// Routes
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
/*
router.get("/loadNewUser", createNewUser); // el que hice yo */

router.get("/users/signup", controllers.renderSignUpForm); // los de fazt
//router.get("/users/signup", function (req, res, next) {res.send("respond with a resource");});

router.post("/users/signup", controllers.singup);

router.get("/users/signin", controllers.renderSigninForm);

router.post("/users/signin", controllers.signin);

router.get("/users/logout", controllers.logout);

module.exports = router;
