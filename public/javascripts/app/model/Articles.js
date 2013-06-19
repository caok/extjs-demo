Ext.define('Demo.model.Articles', {
  extend: 'Ext.data.Model',
  fields: [
    {
      name: 'id',
      type: 'string'
    }, {
      name: 'user',
      type: 'string'
    }, {
      name: 'title',
      type: 'string'
    }, {
      name: 'content',
      type: 'string'
    }, {
      name: 'happened_at',
      type: 'string'
    }]
});
