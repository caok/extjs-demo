var mysql = require('./db');

function Article(username, title, content, happened_at) {
  this.user    = username;
  this.title   = title;
  this.content = content;
  if (happened_at) {
    this.happened_at = happened_at;
  } else {
    this.happened_at = new Date();
  }
}

Article.prototype.save = function save(callback) {
  var article = {
    user        : this.user,
    title       : this.title,
    content     : this.content,
    happened_at : this.happened_at
  };
  var query = mysql.query('INSERT INTO `articles` SET ?', article, function(err, result) {
    if(err){
      callback(err);
    }
    callback(err, result);
  });
};

Article.get = function get(query, callback){
  var sql = 'SELECT * FROM `articles`' + (query ? (' WHERE ' + query) : '')

  mysql.query(sql, function(err, rows, fields) {
    if(err){
      callback(err);
    }
    callback(err, rows);
  });
};

//删
Article.remove = function(query, callback) {
  var sql = 'DELETE FROM  `articles` WHERE ' + query;
  mysql.query(sql, function(err, result){
    if (err) {
      callback(err);
    }
    callback(err, result);
  });
};

module.exports = Article;
