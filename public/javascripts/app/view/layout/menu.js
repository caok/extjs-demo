Ext.define('Demo.view.layout.menu',{
  extend: 'Ext.tree.TreePanel',
  alias: 'widget.menu',
  initComponent : function(){
    Ext.apply(this,{
      id: 'menu-panel',
      title: '系统菜单',
      //iconCls:'icon-menu', //图标
      margins : '0 0 -1 1',
      region:'west',
      border : false,
      enableDD : false,
      split: true,
      width : 212,
      minSize : 130,
      maxSize : 300,

      containerScroll : true,
      collapsible : true,
      autoScroll: false,
      rootVisible: true,

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
              {id:'node-2',text:'节点2',leaf:true},
              {id:'node-3',text:'节点3',leaf:true}
            //] 
          //} 
        ]
      }
    });
    this.callParent(arguments);
  }
})

