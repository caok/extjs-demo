Ext.application({
  name: "Demo",
  appFolder: "/javascripts/app",
  controllers: ['Articles'],
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        xtype: 'article-list'
      }]
    });
  }
});
