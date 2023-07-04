const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  name: String,
  phone: Number,
  address: String,
  password: String,
});

module.exports = mongoose.model("Contact", contactSchema);
