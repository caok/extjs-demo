Ext.define('Demo.view.layout.header', {
  extend: 'Ext.Component',
  initComponent: function() {
    Ext.applyIf(this, {
      xtype: 'box',
      cls: 'header',
      region: 'north',
      html: '<br><center><font size = 6>系统</font></center>',
      height: 70
    });
    this.callParent(arguments);
  }
});
