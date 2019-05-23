module.exports = function(app){
  var controller = require('../controllers/goods_controller');
  var multer  = require('multer');
  // file upload
  var path = require('path');
  // path for folder paths
  var fs = require('fs');
  // file system


  app.route('/goods')
    .get(controller.list)
    .post(controller.add)
  app.get('/goods/new', (req, res)=>{
      res.sendFile(path.join(__dirname, '../../public', 'index1.html'));
    })
}