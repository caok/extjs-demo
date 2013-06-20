Ext.define('Demo.view.Articles', {
  extend: 'Ext.grid.Panel',
  id: "articles_editor",
  alias: 'widget.articleseditor',
  selType: 'rowmodel',
  rowEditor: Ext.create('Ext.grid.plugin.RowEditing', {
    clicksToEdit: 3
  }),
  store: 'Articles',

  initComponent: function () {
    //note: store removed
    this.columns = [{
      header: '作者',
      dataIndex: 'user',
      editor: {
        xtype: 'textfield',
        allowBlank: true,
        blankText: '作者不允许为空',
      },
      flex: 1
    }, {
      header: '标题',
      dataIndex: 'title',
      editor: {
        xtype: 'textfield',
        allowBlank: false,
        blankText: '标题不允许为空',
      },
      flex: 1
    }, {
      header: '内容',
      dataIndex: 'content',
      editor: {
        xtype: 'textfield',
        allowBlank: true
      },
      flex: 1
    }, {
      header: '发生时间',
      dataIndex: 'happened_at',
      xtype : 'datecolumn',
      format : 'Y-m-d',
      flex: 1
    }];
    this.plugins = [ this.rowEditor ];
    this.callParent(arguments);
  }
});
