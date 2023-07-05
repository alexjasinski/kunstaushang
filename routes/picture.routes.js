const express = require("express");
const router = express.Router();
const picture = require("../models/picture.model");
const fileUploader = require("../config/cloudinary.config");

router.get("/picture/create", (req, res) => res.render("gallery"));

router.post("/picture/create", fileUploader.single("picture"), (req, res) => {
  const { title, description } = req.body;

  picture
    .create({ title, description, imageUrl: req.file.path })
    .then((newlyCreatedPictureFromDB) => {
      //console.log(newlyCreatedPictureFromDB);
      res.redirect("/picture");
    })
    .catch((error) =>
      console.log(`Error while creating a new picture: ${error}`)
    );
});
router.get("/movies/:id/edit", (req, res) => {
  const { id } = req.params;

  Movie.findById(id)
    .then((movieToEdit) => res.render("movie-views/movie-edit", movieToEdit))
    .catch((error) =>
      console.log(`Error while getting a single movie for edit: ${error}`)
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
router.post(
  "/movies/:id/edit",
  fileUploader.single("movie-cover-image"),
  (req, res) => {
    const { id } = req.params;
    const { title, description, existingImage } = req.body;

    let imageUrl;
    if (req.file) {
      imageUrl = req.file.path;
    } else {
      imageUrl = existingImage;
    }

    Movie.findByIdAndUpdate(id, { title, description, imageUrl }, { new: true })
      .then(() => res.redirect(`/movies`))
      .catch((error) =>
        console.log(`Error while updating a single movie: ${error}`)
      );
  }
);
module.exports = router;
