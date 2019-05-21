module.exports = function(app){
  var controller = require('../controllers/article_controller');
  var multer  = require('multer')
  var upload = multer({ dest: 'uploads/' })
  app.route('/articles')
    .get(controller.list_articles)
    .post(upload.single('main_image') ,controller.create_an_article)
    
  app.route('/articles/:id')
  	.get(controller.show_article)
    .delete(controller.delete_article)
    .put(controller.update_article)
}