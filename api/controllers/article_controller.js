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
exports.update_article = (req, res) => {
  let id = req.params.id;
  Article.findOneAndUpdate(
    { _id: id }, 
    req.body ,
    {new: true}, 
    (err, article) => {
      if(err)
        res.send(err)
      res.json(article)
  })
}
exports.delete_article = (req, res) => {
  let id = req.params.id;
  Article.findOneAndRemove({ _id: id }, () => {
    res.status(204).json({message: 'No Content'})
  })
}
exports.create_an_article = function(req, res){
  if(!req.file){
    res.status(420).send('error')
  }
  let new_article = new Article(req.body);
  new_article[req.file.fieldname] = req.file.filename;
  new_article.save(function(err, article){
    if(err)
      res.send(err)
    res.json(article)
  })
}