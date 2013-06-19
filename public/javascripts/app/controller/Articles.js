Ext.define("Demo.controller.Articles", {
  extend: 'Ext.app.Controller',

  views: ['Articles'],

  init: function () {
    this.control({
      'articleseditor': {
        render: this.onEditorRender
      }
    });
  },

  onEditorRender: function () {
    console.log("articles editor was rendered");
  }
});
