const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
  main_image:{
    type: String,
    required: 'no image'
  },
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
    required: 'pub_date is empty'
  } 
  
});

module.exports = mongoose.model('Articles', articleSchema)