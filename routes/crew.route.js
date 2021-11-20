var express = require("express");
var router = express.Router();
var createNewCrew = require("../controllers/crew.controllers");

/* GET home page. */
router.get("/", (req, res, next) => {
  //res.render("index", { title: "Express" });
  //res.sendFile("../public/index.html");
  res.send(
    "<h1><center>HTML con pantalla de opciones de manipulacion para crew</center></h1>"
  );
});

router.get("/loadCrew", createNewCrew);

module.exports = router;
