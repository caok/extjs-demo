Ext.define("Demo.controller.Articles", {
  extend: 'Ext.app.Controller',

  models: ['Articles'],
  stores: ['Articles'],
  views: ['article.list', 'article.form'],

  refs: [{
    ref: 'list',
    selector: 'article-list'
  }],

  init: function () {
    this.control({
      'article-list': {
        itemdblclick: this.editArticle,
        selectionchange: this.selectionChange
      },
      'article-form button[action=save]': {
        click: this.createOrUpdateArticle
      },
      '#article-list button[action=addArticle]': {
        click: this.addArticle
      },
      '#article-list button[action=editArticle]': {
        click: this.editArticle
      },
      '#article-list button[action=deleteArticle]': {
        click: this.deleteArticle
      }
    });
  },

  addArticle: function () {
    var view = Ext.widget('article-form');
    view.show();
  },

  editArticle: function(record) {
    var record = this.getList().getSelectedArticle();
    var view = Ext.widget('article-form');
    view.down('form').loadRecord(record);
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
  },

  deleteArticle: function() {
    var record = this.getList().getSelectedArticle();

    if (record) {
      var store = this.getArticlesStore();
      store.remove(record);
      store.sync();
    }
  },

  selectionChange: function(selectionModel, selections) {
    var grid = this.getList();

    if (selections.length > 0) {
      grid.enableRecordButtons();
    } else {
      grid.disableRecordButtons();
    }
  }
});
