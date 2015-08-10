/**
 * 一个页面只能有一个Viewport
 */
Ext.onReady(function() {
	var north = new Ext.Panel({
		title: 'North',
		region: 'north',
		height: 100,
		minHeight: 70,
		split: true
	});
	
	var south = new Ext.Panel({
		title: 'South',
		region: 'south',
		height: 100,
		minHeight: 70		// 默认50
	});
	
	var west = new Ext.Panel({
		title: 'West',
		region: 'west',
		width: 200,
		minWidth: 100,		// 默认50
		split: true			// 相邻区域，5px的SplitBar
	});
	
	var east = new Ext.Panel({
		title: 'East',
		region: 'east',
		width: 200,
		minWidth: 100,
		split: true	
	});
	
	var center = new Ext.Panel({
		title: 'Center',
		region: 'center',
		collapsible: true
	});
	
	var vp = new Ext.Viewport({
		layout: 'border',
		items: [north, south, center, west, east]
	});
});