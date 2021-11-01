const { Schema, model } = require("mongoose");

const UnidadSchema = new Schema(
  {
    unitType: {
      type: String,
      required: true,
    },
    name: String,
    Lv: Number,
    attributes: {
      Move: {
        type: Number,
        required: true,
      },
      Fight: {
        type: Number,
        required: true,
      },
      Shoot: {
        type: Number,
        required: true,
      },
      Armour: {
        type: Number,
        required: true,
      },
      Will: {
        type: Number,
        required: true,
      },
      Health: {
        type: Number,
        required: true,
      },
    },
    powers: Array,
    gear: Array,
  },
  {
    timestamps: true,
  }
);

module.export = model("Unidad", UnidadSchema);
