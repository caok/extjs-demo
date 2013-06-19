Ext.define('Demo.view.Articles', {
  extend: 'Ext.grid.Panel',
  id: "articles_editor",
  alias: 'widget.articleseditor',

  initComponent: function () {
    //hardcoded store with static data:
    this.store = {
      fields: ['title', 'year'],
      data: [{
        title: 'The Matrix',
        year: '1999'
      }, {
        title: 'Star Wars: Return of the Jedi',
        year: '1983'
      }]
    };
    this.columns = [{
      header: 'Title',
      dataIndex: 'title',
      flex: 1
    }, {
      header: 'Year',
      dataIndex: 'year',
      flex: 1
    }];
    this.callParent(arguments);
  }
});
