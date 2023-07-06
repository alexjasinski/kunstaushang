
require("dotenv").config();

require("./db");

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
require("./error-handling")(app);

module.exports = app;
