const mongoose = require("mongoose");
const Gallery = require("../models/Gallery.model");

const MONGO_URI = process.env.MONGODB_URI;

const books = [
  // PASTE HERE THE LIST OF BOOKS PROVIDED IN THIS GIST: https://gist.github.com/ironhack-edu/2816267a015d4870f95275cb873d33b6
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo database: "${x.connections[0].name}"`);

    // Create new documents in the books collection
    return Gallery.create(gallery);
  })
  .then((galleryFromDB) => {
    console.log(`Created ${galleryFromDB.length} gallery`);

    // Once the documents are created, close the DB connection
    return mongoose.connection.close();
  })
  .then(() => {
    // Once the DB connection is closed, print a message
    console.log("DB connection closed!");
  })
  .catch((err) => {
    console.log(`An error occurred while creating gallery from the DB: ${err}`);
  });
