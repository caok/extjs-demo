Ext.define('Demo.view.article.list', {
  extend: 'Ext.grid.Panel',
  id: "article-list",
  alias: 'widget.article-list',
  title: 'All articles',
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
      format : 'Y-m-d',
      flex: 1
    }];
    //新建按钮
    this.addArticleButton = new Ext.Button({
      icon: 'images/add.ico',
      text: 'Add Article',
      action: 'addArticle'
    });

    this.bbar = [this.addArticleButton];
    this.callParent(arguments);
  }
});
