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
    required: true
  },
  password: {
    type: String,
    required: true
  },
  weight: {
    type: String,
    required: true  
  },
  height: {
    type: String,
    required: true
  },
  age: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  goals: {
    type: String,
    required: true
  }

});

module.exports = User = mongoose.model("user", UserSchema);
