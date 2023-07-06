
const express = require("express");
const router = express.Router();
const Picture = require("../models/Picture.model");
const fileUploader = require("../config/cloudinary.config");
const User = require("../models/User.model.js");

router.get("/userpictures", (req, res) => {
  Picture.find().then((allpictures) => {
    console.log(allpictures);
    res.render("picture", { picture: allpictures });
  });
});

router.post("/picture/create", fileUploader.single("picture"), (req, res) => {
  const { title, author, description, location } = req.body;

  Picture.create({
    title,
    author,
    description,
    location,
    imageUrl: req.file.path,
  })
    .then((createdPicture) => {
      console.log(createdPicture);
      User.findByIdAndUpdate(req.session.currentUser._id, {
        $push: { picture: createdPicture._id },
      }).then((updatedUser) => {
        res.redirect("/userprofile");
      });
    })
    .catch((error) =>
      console.log(`Error while creating a new picture: ${error}`)
    );
});

router.get("/picture/:id/edit", (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movieToEdit) =>
      res.render("picture-views/picture-edit", movieToEdit)
    )
    .catch((error) =>
      console.log(`Error while getting a single picture for edit: ${error}`)
    );
});
// GET route to display all the movies
router.get("/picture", (req, res) => {
  picture
    .find()
    .then((pictureFromDB) => {
      // console.log(pictureFromDB);
      res.render("picture-views/picture-list.hbs'", { picture: pictureFromDB });
    })
    .catch((err) =>
      console.log(`Error while getting the picture from the DB: ${err}`)
    );
});
router.post("/picture/:id/edit", fileUploader.single("picture"), (req, res) => {
  const { id } = req.params;
  const { title, description, existingImage } = req.body;

  let imageUrl;
  if (req.file) {
    imageUrl = req.file.path;
  } else {
    imageUrl = existingImage;
  }

  Movie.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true })
    .then(() => res.redirect(`/picture`))
    .catch((error) =>
      console.log(`Error while updating a single picture: ${error}`)
    );
});
module.exports = router;

