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

const app = express();
//making of passwords.
// const bcrypt = require('bcryptjs');
// const saltRounds = 10;
// const plainPassword1 = 'HelloWorld';
// const plainPassword2 = 'helloworld';

// const salt = bcrypt.genSaltSync(saltRounds);

// console.log(`Salt => ${salt}`);

// const hash1 = bcrypt.hashSync(plainPassword1, salt);
// const hash2 = bcrypt.hashSync(plainPassword2, salt);

// const verifyPass1 = bcrypt.compareSync(plainPassword1, hash1);
// const verifyPass2 = bcrypt.compareSync('some wrong password', hash2);

// console.log(`Hash 1: ${hash1}`);
// console.log(`Hash 2: ${hash2}`);
// console.log('----------------------------------------');
// console.log(`Is plainPassword1 corresponding to the created hash1: ${verifyPass1}`);
// console.log(`Is plainPassword2 corresponding to the created hash2: ${verifyPass2}`);

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "kunstaushang";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
app.use("/", indexRoutes);

// pictureRouter needs to be added so paste the following lines:
const pictureRouter = require("./routes/picture.routes"); // <== has to be added
app.use("/", pictureRouter); // <== has to be added

// authRouter needs to be added so paste the following lines:
const authRouter = require("./routes/auth.routes"); // <== has to be added
app.use("/", authRouter); // <== has to be added

const galleryRoutes = require("./routes/gallery.routes");
app.use("/", galleryRoutes);

const searchRoutes = require("./routes/search.routes");
app.use("/", searchRoutes);

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
