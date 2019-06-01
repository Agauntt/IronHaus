const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// New user Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  weight: {
    type: String
  },
  height: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  goals: {
    type: String
  }
});

module.exports = User = mongoose.model("user", UserSchema);
