/**
 * 总结: doLayout()是个很有用的方法
 */
Ext.onReady(function(){
	var toolBar = new Ext.Toolbar({
		height: 25, 
		renderTo: Ext.getBody(),
		items: [{
			text: '窗口0'
		}, {
			text: '窗口1'
		}]
	});
	
	var newButton = new Ext.Button({
		text: '窗口2'
	});
	
	toolBar.addButton(newButton);
	
	toolBar.doLayout();
});