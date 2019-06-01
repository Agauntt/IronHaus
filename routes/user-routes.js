const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const passport = require("passport");

// User Model
const User = require("../models/User");

// GET route to return user info
router.get("/users/:id", (req, res) => {
  User.findById(req.params.id).then(user => res.send(user));
});

// GET route to return user info for modal
router.get("/users/snoop/:id", (req, res) => {
  console.log(req.params.id);
  User.findOne({ email: req.params.id }).then(user => {
    if (user === null) {
      res.send("no user");
    } else {
      console.log(user);
      res.send(user);
    }
  });
});

// GET route to return all registered users
router.get("/users", (req, res) => {
  User.find()
    .sort({ date: -1 })
    .then(user => res.send(user));
});

// POST route to save a new book to the database
router.post("/users", (req, res) => {
  console.log("hello from api");
  console.log(req.body);
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    height: req.body.height,
    weight: req.body.weight,
    age: req.body.age,
    goals: req.body.goals
  });
  console.log(newUser);
  // Hash Password
  bcrypt.genSalt(10, (err, salt) =>
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      // Set hased password
      newUser.password = hash;
      // Save user with hashed password
      newUser
        .save()
        .then(user => {
          res.json({ redirectURI: "/profile" });
        })
        .catch(err => res.send(err));
    })
  );
});

// Handle Login
router.post("/users/login", (req, res, next) => {
  // console.log(req);
  passport.authenticate("local", (req, user) => {
    res.json(user);
  })(req, res, next);
});

module.exports = router;
