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
      res.json({success: true, data: articles});
    });
  });

  // 编辑文章
  app.put('/articles/:id', function(req, res) {
    article = new Article(req.body.user, req.body.title, req.body.content, req.body.happened_at, req.body.id);
    article.update(function(err, result){
      if(err){
        console.log('修改失败!');
        res.json({success: false});
      }
      console.log('修改成功!');
      res.contentType('json');
      res.json({success: true, data: article});
    });
  });

}
