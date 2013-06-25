Ext.define("Demo.controller.Articles", {
  extend: 'Ext.app.Controller',

  views: ['article.list', 'article.form'],
  models: ['Articles'],
  stores: ['Articles'],

  init: function () {
    this.control({
      'article-form button[action=save]': {
        click: this.createOrUpdateArticle
      },
      '#article-list button[action=addArticle]': {
        click: this.addArticle
      },
    });
  },

  addArticle: function () {
    var view = Ext.widget('article-form');
    view.show();
  },

  //some errors
  createOrUpdateArticle: function(button) {
    var win = button.up('window');
    var form = win.down('form');

    var store = this.getArticlesStore();
    var values = form.getValues();

    var article = Ext.create('Demo.model.Articles', values);
    var errors = article.validate();

    if (errors.isValid()) {
      var formRecord = form.getRecord();

      if (formRecord) {
        // perform update
        formRecord.set(values);
      } else {
        // perform create
        store.add(article);
      }

      store.sync({
        success: function() {
          win.close();
        },
        failure: function(batch, options) {
          // extract server side validation errors
          var serverSideValidationErrors = batch.exceptions[0].error;

          var errors = new Ext.data.Errors();
          for (var field in serverSideValidationErrors) {
            var message = serverSideValidationErrors[field];
            errors.add(undefined, { field: field, message: message });
          }
          form.getForm().markInvalid(errors);
        }
      });
    } else {
      form.getForm().markInvalid(errors);
    }
  }
});
