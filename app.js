
require("dotenv").config();

require("./db");


const path = require("path");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express

const express = require("express");

const hbs = require("hbs");
const emoji = require("emojilib");
const userpictureRouter = require("./routes/userpicture.routes");
const app = express();
require("./config/session.config")(app);

require("./config")(app);

const capitalize = require("./utils/capitalize");
const projectName = "kunstaushang";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);


// pictureRouter needs to be added so paste the following lines:
const pictureRouter = require("./routes/picture.routes"); // <== has to be added
app.use("/", pictureRouter); // <== has to be added


const authRouter = require("./routes/auth.routes"); // <== has to be added
app.use("/", authRouter); // <== has to be added

const galleryRoutes = require("./routes/gallery.routes");
app.use("/", galleryRoutes);


const pictureRouter = require("./routes/picture.routes"); // <== has to be added
app.use("/", pictureRouter);

const searchRoutes = require("./routes/search.routes");
app.use("/", searchRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/gallery", (req, res, next) => {
  res.render("gallery");
});

app.get("/search", (req, res, next) => res.render("/partials/searchBar"));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

hbs.registerPartials(__dirname + "/views/partials");

module.exports = app;
