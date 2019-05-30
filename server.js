const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var users = require("./routes/user-routes");
var workouts = require('./routes/workout-routes');
const passport = require('passport');
const socket = require('socket.io');
const path = require('path');

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

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// DB congig
const db = require('./config/keys').MONGO_URI;

// Connect to mongoose
mongoose
  .connect(db || "mongodb://localhost/IronHaus", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected..."))
  .catch(err => console.log(err));

// Use Routes
app.use('/', users);
app.use('/', workouts);

const PORT = process.env.PORT || 3001;


let server= app.listen(PORT, () => console.log(`server connected on port ${PORT} process.env.PORT = ${process.env.PORT}` ));

let io = socket(server);

io.on('connection', (socket) => {
  console.log("made socket connection");
})