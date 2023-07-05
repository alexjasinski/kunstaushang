const mongoose = require('mongoose');

const { Schema, model } = require("mongoose");

const gallerySchema = new Schema(
  {
    title: String,
    description: String,
    author: String,
    rating: Number,
    imageUrl: String

  },
  {
    timestamps: true,
  }
);

module.exports = model("Gallery", gallerySchema);

