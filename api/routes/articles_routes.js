module.exports = function(app){
  var controller = require('../controllers/article_controller');
 
  app.route('/articles')
    .get(controller.list_articles)
    .post(controller.create_an_article)
    
  app.route('/articles/:id')
  	.get(controller.show_article)
}