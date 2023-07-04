const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
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

module.exports = model("Picture", pictureSchema);