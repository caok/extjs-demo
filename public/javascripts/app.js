Ext.application({
  name: "Demo",
  appFolder: "/javascripts/app",
  controllers: ['Articles'],
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        xtype: 'panel',
        title: 'Demo for Extjs',
        //html: 'you can see demo here'
        items: [{
          xtype: 'articleseditor'
        }]
      }]
    });
  }
});
