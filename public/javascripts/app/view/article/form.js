Ext.define('Demo.view.article.form', {
  extend: 'Ext.window.Window',
  id: 'article-form',
  alias : 'widget.article-form',
  title : 'Add / Edit Article',
  layout: 'fit',
  autoShow: true,

  initComponent: function() {
    this.items = [{
      xtype: 'form',
      items: [{
        xtype: 'hidden',
        name : 'id',
        fieldLabel: 'id'
      }, {
        xtype: 'textfield',
        name : 'user',
        fieldLabel: '作者'
      }, {
        xtype: 'textfield',
        name : 'title',
        fieldLabel: '标题'
      }, {
        xtype: 'textfield',
        name : 'content',
        fieldLabel: '内容'
      }, {
        xtype: 'datefield',
        name : 'happened_at',
        fieldLabel: '发生时间',
        format: 'Y-m-d'
      }]
    }];

    this.buttons = [{
      text: 'Save',
      action: 'save'
    }, {
      text: 'Cancel',
      scope: this,
      handler: this.close
    }];

    this.callParent(arguments);
  }
});
