Ext.define('Demo.view.Viewport',{
  extend: 'Ext.Viewport',
  layout: 'fit',
  hideBorders: true,
  requires : [
    'Demo.view.layout.header',
    'Demo.view.layout.menu',
    'Demo.view.layout.tabPanel',
    'Demo.view.layout.footer'
  ],
  initComponent : function(){
    Ext.apply(this, {
      items: [{
        id:'desk',
        layout: 'border',
        items: [
          Ext.create('Demo.view.layout.header'),
          Ext.create('Demo.view.layout.menu'),
          Ext.create('Demo.view.layout.tabPanel'),
          Ext.create('Demo.view.layout.footer')
        ]
      }]
    });
    this.callParent(arguments);
  }
})
