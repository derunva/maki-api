var mongoose = require('mongoose'),
  Article = mongoose.model('Articles');

exports.list_articles = function(req, res){
  let limit = Number(req.query.limit) || 3;
  let page = Number(req.query.page) || 1;
  let options = {
    select: 'title pub_date',
    limit: limit,
    page : page
  }
  Article.paginate(
    {}, 
    options, 
    function(err, results) { 
      if (err)
        res.status(400).send(err)
      res.json(results)
    }
  );
}
exports.show_article = function(req , res){
  var id = req.params.id;
  Article.findById(id, function(err, article){
    if(err)
      res.status(420).send(err)

    if(article){
      res.json(article)  
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
    res.status(420).send('error');
    return false;
  }
  console.log(req.file)
  let new_article = new Article(req.body);
  new_article[req.file.fieldname] = req.file.filename;
  new_article.save(function(err, article){
    if(err)
      res.send(err)
    res.json(article)
  })
}