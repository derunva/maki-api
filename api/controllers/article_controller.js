var mongoose = require('mongoose'),
  Article = mongoose.model('Articles');

exports.list_articles = function(req, res){
  Article.find({}, function(err, articles){
    if(err)
      res.send(err)
    res.json(articles)
  })
}
exports.show_article = function(req , res){
  var id = req.params.id;
  Article.findById(id, function(err, article){
    if(err)
      res.send(err)

    if(article){
      res.json(article)  
    }else{
      res.status(404).send('not found')
    }
    
    
    
  })
}

exports.create_an_article = function(req, res){
  let new_article = new Article(req.body);
  new_article.save(function(err, article){
    if(err)
      res.send(err)
    res.json(article)
  })
}