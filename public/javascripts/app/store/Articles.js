Ext.define('Demo.store.Articles', {
  extend: 'Ext.data.Store',

  autoLoad: true,
  autoSync: true,

  proxy: {
    type: 'rest',
    url: '/articles',
    model: 'Demo.model.Articles',
    reader: {
      type: 'json',
      root: 'data',
      successProperty: 'success'
    }
  }
});
