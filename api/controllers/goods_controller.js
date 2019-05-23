var mongoose = require('mongoose'),
  Goods = mongoose.model('Goods');
exports.list =  (req, res)=>{
  let limit = req.params.limit || 6;
  let page = req.params.page || 1;
  page--;
  Goods.find(
    {}, 
    { 
      labels: 1, 
      image: 1,
      descr: 1,
      price: 1 
    }, 
    { skip: limit*page, limit: limit }, 
    function(err, results) { 
      res.json(results)
    }
  );
  
}
exports.add = (req, res) => {
  console.log(req.body)
  var goods_item = new Goods(req.body)
  goods_item.save((err, item)=>{
    if (err) {
      res.status(400).send(err)
    }else{
      res.json(item)
    }

  })
}