var Article = require('../models/article.js');

module.exports = function (app) {
  // 主页
  app.get('/', function(req, res){
    Article.get(null, function(err, articles){
      if(err){
        articles = [];
      }
      res.render('index', {
        title    : '主页',
        articles : articles
      });
    });
  });

  // 文章清单
  app.get('/articles', function(req, res) {
    Article.get(null, function(err, articles){
      if(err){
        articles = [];
      }
      res.contentType('json');
      res.json({success: true, articles: articles});
    });
  });
}
