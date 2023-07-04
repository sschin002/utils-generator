//initialize mongoose to create schema
const mongoose = require("mongoose");

//create schema
const contactSchema = mongoose.Schema({
  name: String,
  phone: Number,
  address: String,
  password: String,
});

module.exports = mongoose.model("Contact", contactSchema);
