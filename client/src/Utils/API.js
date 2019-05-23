import axios from "axios";

export default {
  // sign in user
  signIn: function(userData) {
    // console.log(userData.email)
    return axios.post("/login", userData);
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/");
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/user/");
  },
  // Saves a user to the database
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  }
};
