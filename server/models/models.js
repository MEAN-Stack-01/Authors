const mongoose = require('./mongoose');
var validate = require('mongoose-validator');

var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3],
    message: 'Name should be more than {ARGS[0]} characters',
  }),
]

var quoteValidator = [
  validate({
    validator: 'isLength',
    arguments: [3],
    message: 'Quote should be more than {ARGS[0]} characters',
  }),
]

var AuthorSchema = new mongoose.Schema({
  name : {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name should be more than 3 characters"]
  },
  quote : {
    type: String,
    required : [true, "Quote is required"],
    minlength: [3, "Quote should be more than 3 characters"]
  },
},{timestamps: true})

module.exports = AuthorSchema
