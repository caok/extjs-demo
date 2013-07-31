// 开启动态加载的核心
Ext.Loader.setConfig({enabled: true});

Ext.application({
  name: "Demo",
  appFolder: "/javascripts/app",
  autoCreateViewport: true, //自动加载Viewport.js文件
  controllers: ['Main'],
  //launch: function() {
    //Ext.tip.QuickTipManager.init();
  //}
});

