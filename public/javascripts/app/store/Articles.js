Ext.define('Demo.store.Articles', {
  extend: 'Ext.data.Store',
  model: 'Demo.model.Articles',

  data: [{
    id: '1',
    user: 'tom',
    title: 'The Matrix',
    content: 'hello Tom',
    happened_at: '2013-6-1'
  }]
});
