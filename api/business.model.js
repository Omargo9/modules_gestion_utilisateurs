const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Business = new Schema({
  person_id: {
    type: String,
    unique: true,

  },
  person_firstname: {
    type: String,

  },
  person_name: {
    type: String,

  },
  email: {
    type: String,

  },
  creation_date: {
    type: String,

  },
  password: {
    type: String,
    minlength: 8,

  }

}, {
    collection: 'business'
  });

module.exports = mongoose.model('Business', Business);