const router = require("express").Router();
const axios = require("axios");

router.get("/search", function (req, res) {
  res.render("search/search-image");
});

router.post("/search", function (req, res) {
  const { searchText } = req.body;
  const url = `https://api.unsplash.com/search/photos?page=3&query=${searchText}`;
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

module.exports = router;
