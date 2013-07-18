Ext.define('Demo.view.article.list', {
  extend: 'Ext.grid.Panel',
  id: "article-list",
  alias: 'widget.article-list',
  title: 'All articles',
  store: 'Articles',

  initComponent: function () {
    this.columns = [{
      header: 'id',
      dataIndex: 'id',
      flex: 1
    }, {
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
      format : 'Y-m-d',
      flex: 1
    }];
    //新建按钮
    this.addArticleButton = new Ext.Button({
      icon: 'images/add.ico',
      text: 'Add Article',
      action: 'addArticle'
    });

    this.editArticleButton = new Ext.Button({
      icon: 'images/edit.ico',
      text: 'Edit Article',
      action: 'editArticle',
      disabled: true
    });

    this.deleteArticleButton = new Ext.Button({
      icon: 'images/del.ico',
      text: 'Delete Article',
      action: 'deleteArticle',
      disabled: true
    });

    this.tbar = [this.addArticleButton, this.editArticleButton, this.deleteArticleButton];

    this.paging = new Ext.PagingToolbar({
      //pageSize: 10,
      store: 'Articles',
      displayInfo: true
    });

    this.bbar = [this.paging];
    this.callParent(arguments);
  },

  getSelectedArticle: function() {
    return this.getSelectionModel().getSelection()[0];
  },

  enableRecordButtons: function() {
    this.editArticleButton.enable();
    this.deleteArticleButton.enable();
  },

  disableRecordButtons: function() {
    this.editArticleButton.disable();
    this.deleteArticleButton.disable();
  }
});
