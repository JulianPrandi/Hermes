//import Unidad from "../model/Unidad";
const Unidad = require("../model/Unidad");
//export const renderNoteForm = (req, res) => {
//  res.render("notes/new-note");
//};

const createNewUnit = async (req, res) => {
  const { unitType, name, Lv, attributes, powers, gear } = req.body;

  const errors = [];
  if (!unitType) {
    errors.push("Please insert a Unit Type.");
  }
  if (!name) {
    errors.push("Please insert a Name for this unite");
  }
  if (!Lv) {
    errors.push("Please insert a Lv from this unit");
  }
  if (!attributes) {
    errors.push("Please complete the attributes for this unit");
  }
  if (errors.length > 0) {
    let error = "<ul>";
    errors.forEach((element) => (error = error + `<li>${element}</li>`));
    error = error + "</ul>";
    res.send(error);
  } else {
    console.log("req.body: ", req.body);
    res.send("<h1>Exito</h1>");
    let newUnit = new Unidad({
      unitType,
      name,
      Lv,
      attributes,
      powers,
      gear,
    });
    //newUnit.user = req.user.id;
    await newUnit.save();
    //req.flash("success_msg", "Note Added Successfully");
    res.redirect("/");
  }
};
module.exports = createNewUnit;
