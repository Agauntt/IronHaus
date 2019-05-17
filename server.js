const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// const books = require("./routes/api-routes");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Connect to mongoose
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/IronHaus", { useNewUrlParser: true })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

// Use Routes
// app.use("/api/books", books);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`server connected on port ${PORT}`));