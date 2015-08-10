Ext.onReady(function() {
	var win = new Ext.Window({
		title: '测试窗口',
		width: 400,
		height: 300,
		draggable: true
	});
	win.setPosition(100, 100);
	win.show();
});
