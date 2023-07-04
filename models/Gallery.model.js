const { Schema, model } = require("mongoose");

const gallerySchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Gallery", gallerySchema);

