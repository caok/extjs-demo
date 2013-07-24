Ext.application({
  name: "Demo",
  appFolder: "/javascripts/app",
  controllers: ['Articles'],
  //controllers: ['Main', 'Articles'],
  launch: function () {
    var rightTab=new Ext.TabPanel({
      id:'rightTab',
      layout: 'fit',
      region:'center'
    });

    var loadNodeInfo=function(tree,record){
      var id=record.data.id;
      console.log(record.data.id);
      if(!id){
        Ext.Msg.alert('提示信息', '节点必须设置唯一的id');
        return;
      }
      var comp=rightTab.getComponent(id);
      if(!comp){
        if (id == "article-list"){
          var view = Ext.widget('article-list');
          rightTab.add(view);
        }else{
          comp=new Ext.Panel({
            id:id,
            layout:'fit',
            closable:true,
            colseAction:'destory',
            title:record.data.text||"",
            html:record.data.text
          });
          rightTab.add(comp);
        }
      }
      rightTab.setActiveTab(comp);
      //rightTab.scrollToTab(comp);
    };

    var leftTree=new Ext.tree.TreePanel({
      id:'leftTree',
      title: '菜单',
      autoScroll: true,
      rootVisible: true,
      collapsible: true,
      region: 'west',
      width: 200,
      split: true,
      root:{
        text:'一级目录',
        expanded:true,
        leaf:false,
        children:[
          //{
            //text:'黑木崖',
            //leaf:false,
            //expanded:true,
            //children:[
              {id:'article-list',text:'article',leaf:true},
              {id:'2',text:'节点2',leaf:true},
              {id:'3',text:'节点3',leaf:true}
            //]
          //}
        ]
      },
      listeners:{'itemclick':loadNodeInfo}
    });

    Ext.create('Ext.container.Viewport', {
      layout: 'border',
      items: [{
        title: "系统",
        //collapsible: true,
        html: '<br><center><font size = 6>系统</font></center>',
        region: 'north',
        height: 100
      },
      leftTree,rightTab
      //{
        //title: '菜单',
        //split: true,
        //collapsible: true,
        //region: 'west',
        //width: 250,
        //layout: 'accordion',
        //items: leftTree
        ////layoutConfig: {
          ////titleCollapse: false,
          ////animate: true,
          ////activeOnTop: true
        ////},
        ////items: [
          ////{ title: 'Panel 1',
            ////items: leftTree
          ////},
          ////{ title: 'Panel 2',
            ////html: '<p>Panel 2</p>'
          ////},
          ////{ title: 'Panel 3',
            ////html: '<p>Panel 3</p>'
          ////}
        ////]
      //}
      //},{
        //layout: 'fit',
        //region: 'center',
        //contentE1: 'contentIframe',
        ////id: 'mainContent'
        ////collapsible: true,
        //xtype: 'article-list'
      //}
      ]
    });
  }
});

