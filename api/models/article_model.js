const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  title:{
    type: String,
    required: 'title is empty'
  },
  created_date:{
    type: Date,
    default: Date.now
  },
  pub_date:{
    type: Date,
    required: 'title is empty'
  } 
  
});

module.exports = mongoose.model('Articles', articleSchema)