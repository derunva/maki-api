var mongoose = require('mongoose'),
  Goods = mongoose.model('Goods');
var multer  = require('multer')
var path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/goods/img')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)) //Appending extension
  }
})

var upload = multer({ storage: storage }).single('image');

exports.list =  (req, res)=>{

  let limit = Number(req.query.limit) || 6;
  let page = Number(req.query.page) || 1;
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
  
  
  upload(req, res, function (err) {
    console.log(req.body, req.file)
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      res.status(500).send(err)
    } else if (err) {
      // An unknown error occurred when uploading.
      res.status(500).send(err)
    }else{
      var goods_item = new Goods(req.body)
      if(req.file){
        goods_item.image = req.file.filename
      }
      goods_item.save((err, item)=>{
        if (err) {
          res.status(400).send(err)
        }else{
          res.json(item)
        }

      })
    }

    
  })
  
}