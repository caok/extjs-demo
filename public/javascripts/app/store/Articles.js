Ext.define('Demo.store.Articles', {
  extend: 'Ext.data.Store',

  model: 'Demo.model.Articles',
  autoLoad: true,

  proxy: {
    type: 'ajax',
    url: '/articles',
    reader: {
      type: 'json',
      root: 'articles',
      successProperty: 'success'
    }
  }
});
