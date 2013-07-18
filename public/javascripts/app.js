Ext.application({
  name: "Demo",
  appFolder: "/javascripts/app",
  controllers: ['Articles'],
  launch: function () {


    Ext.create('Ext.container.Viewport', {
      layout: 'border',
      items: [{
        title: "系统",
        //collapsible: true,
        html: '<br><center><font size = 6>系统</font></center>',
        region: 'north',
        height: 100
      },{
        title: '菜单',
        split: true,
        collapsible: true,
        region: 'west',
        width: 250,
        layout: 'accordion',
        //layoutConfig: {
          //titleCollapse: false,
          //animate: true,
          //activeOnTop: true
        //},
        items: [
          { title: 'Panel 1',
          },
          { title: 'Panel 2',
            html: '<p>Panel 2</p>'
          },
          { title: 'Panel 3',
            html: '<p>Panel 3</p>'
          }
        ]
      },{
        layout: 'fit',
        region: 'center',
        contentE1: 'contentIframe',
        //id: 'mainContent'
        //collapsible: true,
        xtype: 'article-list'
      }]
    });
  }
});

