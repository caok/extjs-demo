Ext.define('Demo.view.Articles', {
  extend: 'Ext.grid.Panel',
  id: "articles_editor",
  alias: 'widget.articleseditor',

  store: 'Articles',
  initComponent: function () {
    //note: store removed
    this.columns = [{
      header: '作者',
      dataIndex: 'user',
      flex: 1
    }, {
      header: '标题',
      dataIndex: 'title',
      flex: 1
    }, {
      header: '内容',
      dataIndex: 'content',
      flex: 1
    }, {
      header: '发生时间',
      dataIndex: 'happened_at',
      xtype : 'datecolumn',
      format : 'Y年m月d日',
      flex: 1
    }];
    this.callParent(arguments);
  }
});
