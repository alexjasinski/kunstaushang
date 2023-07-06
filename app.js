// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");
const emoji = require("emojilib");
const userpictureRouter = require("./routes/userpicture.routes");
const app = express();
// use session here:                 V
require("./config/session.config")(app);

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "kunstaushang";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

app.use("/", userpictureRouter); // <== has to be added

// authRouter needs to be added so paste the following lines:
const authRouter = require("./routes/auth.routes"); // <== has to be added
app.use("/", authRouter); // <== has to be added

const galleryRoutes = require("./routes/gallery.routes");
app.use("/", galleryRoutes);

const pictureRouter = require("./routes/picture.routes"); // <== has to be added
app.use("/", pictureRouter);
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
