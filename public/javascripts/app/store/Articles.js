Ext.define('Demo.store.Articles', {
  extend: 'Ext.data.Store',

  model: 'Demo.model.Articles',
  autoLoad: true,
  autoSync: false,

  //listeners: {
    //load: function() {
      //console.log(arguments);
    //},
    //update: function() {
      //console.log(arguments);
    //},
    //beforesync: function() {
      //console.log(arguments);
    //}
  //},

  proxy: {
    type: 'rest',
    url: '/articles',
    model: 'Demo.model.Articles',
    noCache: false,
    reader: {
      type: 'json',
      root: 'data',
      successProperty: 'success'
    }
  }
});
