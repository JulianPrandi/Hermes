const { Schema, model } = require("mongoose");

const CrewSchema = new Schema(
  {
    crewName: {
      type: String,
      required: true,
    },
    experience: int,
    shipName: String,
    credits: int,
    shipUpgrades: Array,
    shipsHold: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Crew", CrewSchema);
