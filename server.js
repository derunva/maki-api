const express = require('express'),
  app = express(),
  port = process.env.PORT || 4000, 
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  Article = require('./api/models/article_model');

var password = 'ESXJ2sGbQK89MyGO'
var connection_string = `mongodb+srv://derun:${password}@cluster0-dkoh3.mongodb.net/test?retryWrites=true`
mongoose.Promise = global.Promise;
mongoose.connect(connection_string, {useNewUrlParser: true});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({ extended: true }));
var articles = require('./api/routes/articles_routes');
articles(app);

app.listen(port);

console.log('API server started on: '+ port);