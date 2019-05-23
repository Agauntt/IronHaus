const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/api-routes");
const passport = require('passport');

const app = express();

// Passport config 
require('./config/passport')(passport);

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Connect to mongoose
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/IronHaus", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use(routes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));
