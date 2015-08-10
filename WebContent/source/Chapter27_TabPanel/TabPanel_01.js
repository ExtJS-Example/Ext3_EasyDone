/**
 * 一个页面只能有一个Viewport
 */
Ext.onReady(function() {
	var tab = new Ext.TabPanel({
		width: 500,
		height: 300,
		renderTo: 'd',
		activeItem: 0,
		items: [{
			title: '选项卡1',
			html: '中华人民共和国',
			bodyStyle: 'padding: 10px'
		}, {
			title: '选项卡2',
			html: '美利坚合众国',
			bodyStyle: 'padding: 10px'
		}]
	});
});