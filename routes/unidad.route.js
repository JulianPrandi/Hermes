var express = require("express");
var router = express.Router();
var Unidad = require("../model/Unidad");
var createNewUnit = require("../controllers/unidad.controller");
//import { createNewUnit } from "../controllers/unidad.controller";

router.get("/", (req, res, next) => {
  res.send(
    "<h1><center>HTML con pantalla de opciones para manipulacion de unidades</center></h1>"
  );
});

router.get("/getUnit", function (req, res, next) {
  console.log("req: ", req.body);
  if (req.body.nombreUnidad === "canoptek sentinel") {
    res.send("me trae la unidad pedida");
  } else {
    //res.render("index", { title: "Trae La Unidad" });
    res.send("<h1><center>Trae La Unidad</center></h1>");
  }
});

/*router.post("/loadUnit", function (req, res, next) {
  console.log("req: ", req.body);
  //let unit = Unidad(req.body);
  Unidad.insert(req.body);
  res.send("Carga La Unidad segun el modelo");
});*/

router.get("/loadUnit", createNewUnit);

router.post("/modifyUnit", function (req, res, next) {
  console.log("req: ", req.body);
  res.send("<h1><center>Modifica la unidad seleccionada</center></h1>");
});

router.post("/deleteUnit", function (req, res, next) {
  console.log("req: ", req.body);
  res.send("Borra la Unidad solicitada");
});

module.exports = router;
