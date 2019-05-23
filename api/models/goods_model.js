const mongoose = require('mongoose');
var Schema = mongoose.Schema;
var goodsSchema = new Schema({
  labels:{
    type: Array
  },
  image:{
    type: String
  },
  title:{
    type: String,
    required: 'title is empty'
  },
  created_date:{
    type: Date,
    default: Date.now
  },
  descr:{
    type: String,
    required: 'descr is empty'
  },
  price:{
    type: String,
    required: 'price is empty'
  },
  images:{
    type: String
  },
  body: {
    type: String
  },
  delivery:{
    type: Object
  },
  bonus_descr: {
    type: String
  }
  
});
module.exports = mongoose.model('Goods', goodsSchema)