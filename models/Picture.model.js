// models/picture.model.js
const mongoose = require("mongoose");

const { Schema, model } = require("mongoose");

const pictureSchema = new Schema(
  {
    imageUrl: String,
    title: String,
    description: String,
    location: String,
    author: { type: Schema.Types.ObjectId, userSchema: "User" },
    rating: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = model("Picture", pictureSchema);
