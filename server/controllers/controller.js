const mongoose = require('mongoose');

const AuthorSchema  = require('../models/models');

const Author = mongoose.model('Author',AuthorSchema);

module.exports = {

  index : (req, res) => {
    Author.find({})
      .then(
        data => {
          console.log("IN CONTROLLER",data);
          res.json({status: true, authors: data})
        }
      )
      .catch(
        error => res.json({status: false, message: error })
      )
  },

  create : (req,res) => {
    Author.create(req.body)
      .then(
        data => res.json({status: true, messages: {success:"Author successfully added!"},author:data})
      )
      .catch(
        err => {
          if(err){
            let messages = {}
            for (let key in err.errors){
              messages[key] = err.errors[key].message;
            }
            res.json({status: false, messages: messages })
          }
        }
      )
  },

  getOne : (req, res) => {
    Author.findOne({_id:req.params.id})
      .then(
        data => {
          res.json({status: true, author: data})
        }
      )
      .catch(
        error => res.json({status: false, message: error })
      )
  },

  update : (req, res) => {
    Author.findOneAndUpdate({_id:req.params.id},{$set:req.body},{runValidators: true,context: 'query'})
      .then(
        data => {
          console.log("IN CONTROLLER",data);
          res.json({status: true, messages: {success:"Author updated successfully!"},author:data})
        }
      )
      .catch(
        err => {
          if(err){
            let messages = {}
            for (let key in err.errors){
              messages[key] = err.errors[key].message;
            }
            res.json({status: false, messages: messages })
          }
        }
      )
  },

  deleteOne : (req, res) => {
    Author.deleteOne({_id:req.params.id})
      .then(
        data => res.json({status: true, messages: {success:"Author deleted successfully!"},author:data})
      )
      .catch(
        error => res.json({status: false, message: error })
      )
  },

}
