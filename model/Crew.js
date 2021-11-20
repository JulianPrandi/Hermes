const { Schema, model } = require("mongoose");

const CrewSchema = new Schema(
  {
    crewName: {
      type: String,
      required: true,
    },
    experience: { type: Number, required: true },
    shipName: { type: String, required: true },
    credits: { type: Number, required: true },
    shipUpgrades: Array,
    shipsHold: { type: Array, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Crew", CrewSchema);
