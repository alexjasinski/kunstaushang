// routes/auth.routes.js

const { Router } = require("express");
const router = new Router();
const mongoose = require("mongoose"); // <== has to be added

const User = require("../models/User.model");
const emoji = require("emojilib");
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const { isLoggedIn, isLoggedOut } = require("../middleware/route-guard.js");

// GET route ==> to display the signup form to users
router.get("/signup", isLoggedOut, (req, res) => res.render("auth/signup"));

// POST route ==> to process form data
router.post("/signup", (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.render("auth/signup", {
      errorMessage:
        "All fields are mandatory. Please provide your username, email and password.",
    });
    return;
  }
  bcryptjs
    .genSalt(saltRounds)
    .then((salt) => bcryptjs.hash(password, salt))
    .then((hashedPassword) => {
      return User.create({
        // username: username
        username,
        email,
        // passwordHash => this is the key from the User model
        //     ^
        //     |            |--> this is placeholder (how we named returning value from the previous method (.hash()))
        passwordHash: hashedPassword,
      });
    })
    .then((userFromDB) => {
      //console.log("Newly created user is: ", userFromDB);
      res.redirect("/userProfile");
    })
    .catch((error) => {
      // copy the following if-else statement
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render("auth/signup", { errorMessage: error.message });
      } else {
        next(error);
      }
    });
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.get("/about", (req, res) => {
  req.render("/views/about");
});
router.post("/about", (req, res) => {
  console.log("ashfnmas cjkac");
});
router.get("/movies/create", (req, res) =>
  res.render("movie-views/movie-create")
);
// POST login route ==> to process form data
router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  console.log("SESSION =====> ", req.session);

  // req.body destructuring
  // and email and password validation stay the same

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        console.log("Email not registered. ");
        res.render("auth/login", {
          errorMessage: "User not found and/or incorrect password.",
        });
        return;
      } else if (bcryptjs.compareSync(password, user.passwordHash)) {
        // when we introduce session, the following line gets replaced with what follows:
        // res.render('users/user-profile', { user });

        //******* SAVE THE USER IN THE SESSION ********//
        req.session.currentUser = user;
        console.log(user);
        res.redirect("/userProfile");
      } else {
        console.log("Incorrect password. ");
        res.render("auth/login", {
          errorMessage: "User not found and/or incorrect password.",
        });
      }
    })
    .catch((error) => next(error));
});

// routes/auth.routes.js

// nothing gets changed except the GET /userProfile route

router.get("/userProfile", isLoggedIn, (req, res) => {
  console.log(req.session.currentUser);
  res.render("users/user-profile", { userInSession: req.session.currentUser });
});
router.post("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) next(err);
    res.redirect("/");
  });
});

module.exports = router;
