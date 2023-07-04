// models/picture.model.js

const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
  {
    title: String,
    description: String,
    location: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("picture", pictureSchema);
