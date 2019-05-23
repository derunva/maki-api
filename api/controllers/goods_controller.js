var mongoose = require('mongoose'),
  Goods = mongoose.model('Goods');
exports.list =  (req, res)=>{

  let limit = Number(req.query.limit) || 6;
  let page = Number(req.query.page) || 1;
  page--;
  let options = {
    select: 'labels image descr price',
    limit: limit,
    page : page
  }
  Goods.paginate(
    {}, 
    options, 
    function(err, results) { 
      if (err)
        res.status(400).send(err)
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