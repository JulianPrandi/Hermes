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

router.get("/signup", controllers.renderSignUpForm);

router.post("/signup", controllers.signup);

router.get("/signin", controllers.renderSigninForm);

router.post("/signin", controllers.login);

router.get("/logout", controllers.logout);

module.exports = router;
