//import Unidad from "../model/Unidad";
const Crew = require("../model/Crew");
//export const renderNoteForm = (req, res) => {
//  res.render("notes/new-note");
//};

const createNewCrew = async (req, res) => {
  const { crewName, experience, shipName, credits, shipUpgrades, shipsHold } =
    req.body;

  const errors = [];
  if (!crewName) {
    errors.push("Please insert a Unit Type.");
  }
  if (!experience) {
    errors.push("Please insert a Name for this unite");
  }
  if (!shipName) {
    errors.push("Please insert a Lv from this unit");
  }
  if (!credits) {
    errors.push("Please complete the attributes for this unit");
  }
  if (!shipUpgrades) {
    errors.push("Please complete the attributes for this unit");
  }
  if (!shipsHold) {
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
    let newCrew = new Crew({
      crewName,
      experience,
      shipName,
      credits,
      shipUpgrades,
      shipsHold,
    });
    //newUnit.user = req.user.id;
    await newCrew.save();
    //req.flash("success_msg", "Note Added Successfully");
    //res.redirect("/");
  }
};
module.exports = createNewUnit;
