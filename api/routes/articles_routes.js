module.exports = function(app){
  var articles = [
    {
      title: 'my title',
      pub_date: '2020/07/22',
      short: 'some short text',
      body: 'inner page data'
    }
  ]
  app.route('/articles')
    .get((req, res) =>{
      res.json(articles)
    })
    .post((req, res)=> {
      articles.push(req.body)
      res.json(req.body)
    })
}