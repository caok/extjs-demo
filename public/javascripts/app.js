Ext.application({
  name: "demo",
  appFolder: "/javascripts/app",
  launch: function () {
    Ext.create('Ext.container.Viewport', {
      layout: 'fit',
      items: [{
        xtype: 'panel',
        title: 'Demo for Extjs',
        html: 'you can see demo here'
      }]
    });
  }
});
