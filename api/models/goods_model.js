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
    type: Number,
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
  
}, {
    toObject : {getters: true},
    toJSON : {getters: true}
});
goodsSchema.path('price').get(function(num) {
  return (num / 100).toFixed(2);
});

// Setter
goodsSchema.path('price').set(function(num) {
  return num * 100;
});
module.exports = mongoose.model('Goods', goodsSchema)