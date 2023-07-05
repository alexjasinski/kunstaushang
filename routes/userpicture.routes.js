// routes/movie.routes.js

const express = require("express");
const router = express.Router();
const fileUploader = require("../config/cloudinary.config");

const User = require("../models/User.model");

// GET route to display the form to create a new movie
router.get("/userpicture/create", (req, res) =>
  res.render("userpicture-views/userpicture-create")
);

router.post(
  "/userpicture/create",
  fileUploader.single("userpicture"),
  (req, res) => {
    const { id } = req.session._id;
    console.log("the id", id);

    let imageUrl;
    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = existingImage;
    }

    User.findByIdAndUpdate(id, { imageUrl }, { new: true })
      .then(() => res.redirect(`/userprofile`))
      .catch((error) =>
        console.log(`Error while updating a single movie: ${error}`)
      );
  }
);

module.exports = router;
