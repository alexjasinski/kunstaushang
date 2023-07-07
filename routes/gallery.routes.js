const router = require("express").Router();
const axios = require("axios");
const Gallery = require("../models/Gallery.model.js");

const arr = [{ name: "abc" }, { name: "def" }];
router.get("/gallery", (req, res) => {
  const url = `https://api.unsplash.com/search/photos?page=3&query=tech`;
  axios
    .get(url, {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS}`,
      },
    })
    .then((response) => {
      // res.json(response.data);
      res.render("gallery", { images: response.data.results });
    })
    .catch((error) => res.json(error));
});

// router.get("/gallery", (req, res, next) => {
//   Gallery.find()
//     .then((allThePicturesFromDB) => {
//       console.log("Retrieved gallery from DB:", allThePicturesFromDB);
//       res.render("gallery.hbs", { gallery: allThePicturesFromDB });
//     })
//     .catch((error) => {
//       console.log("Error while getting the art from the DB: ", error);
//       next(error);
//     });
// });

router.get("/gallery/:pictureId", (req, res) => res.render("picture.hbs"));

// GET route to display the form
// we still didn't create any HBS files so this will be our next task
router.get("/gallery/create", (req, res) =>
  res.render("views/picture-create.hbs")
);

// POST route to save a new book to the database in the books collection
router.post("/gallery/create", (req, res, next) => {
  console.log(req.body);
  const { title, author, description, rating } = req.body;

  Gallery.create({ title, author, description, rating })
    .then(() => res.redirect("/gallery"))
    .catch((error) => next(error));
});

// GET route to retrieve and display details of a specific picture
router.get("/gallery/:pictureId", (req, res) => {
  const { artId } = req.params;
  console.log("The ID from the URL is: ", artId);

  res.render("views/picture.hbs");
});

// GET route to retrieve and display details of a specific picture
router.get("/gallery/:pictureId", (req, res, next) => {
  const { pictureId } = req.params;

  Book.findById(pictureId)
    .then((thePicture) =>
      res.render("views/picture.hbs", { picture: thePicture })
    )
    .catch((error) => {
      console.log("Error while retrieving book details: ", error);

      // Call the error-middleware to display the error page to the user
      next(error);
    });
});

module.exports = router;
