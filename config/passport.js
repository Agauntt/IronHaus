const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/User');

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
            // Match User
            User.findOne({ email: email })
                .then(user => {
                    if(!user) {
                        console.log("email not found");
                        return done(null, false, {message: "email not found" });
                    };

                    // Match password
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err) throw err;

                        if(isMatch) {
                            console.log("password correct");
                            return done(null, user);
                        } else {
                            console.log("password not matched")
                            return done(null, false, {message: "Incorrect Password"});
                        }
                    })
                })
                .catch(err => console.log(err));
        })
    )
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        })
    })

}