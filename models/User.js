const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// New user Schema
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  password: {
    type: String,
    required: true
  }
});

module.exports = User = mongoose.model("user", UserSchema);
