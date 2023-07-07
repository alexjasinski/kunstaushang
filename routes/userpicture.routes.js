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
    console.log(req.session);
    const id = req.session.currentUser._id;
    console.log("the id", id);

    let profilePhoto;
    if (req.file) {
      profilePhoto = req.file.path;
    } else {
      profilePhoto = existingImage;
    }

    console.log("the picture", profilePhoto);

    User.findByIdAndUpdate(id, { profilePhoto: profilePhoto }, { new: true })
      .then(() => res.redirect(`/userprofile`))
      .catch((error) =>
        console.log(`Error while updating a single movie: ${error}`)
      );
  }
);

module.exports = router;
