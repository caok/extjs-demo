Ext.define('Demo.model.Articles', {
  extend: 'Ext.data.Model',
  idProperty: 'id',
  fields: [
    { name: 'id', type: 'string' },
    { name: 'user', type: 'string' },
    { name: 'title', type: 'string' },
    { name: 'content', type: 'string' },
    { name: 'happened_at', type: 'date' }
  ],
  validations: [
    { type: 'presence', field: 'user' },
    { type: 'presence', field: 'title' },
    { type: 'presence', field: 'content' }
  ]
});
