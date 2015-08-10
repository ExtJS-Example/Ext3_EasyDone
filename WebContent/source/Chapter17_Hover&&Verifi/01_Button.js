Ext.onReady(function() {
	Ext.QuickTips.init();		// 开启悬停提示: qtip(默认),side,under,title,around
	
	// 非标单组件 -- button
	var btn = new Ext.Button({
		text: '悬停演示',
		renderTo: Ext.getBody(),
		tooltipType: 'qtip',	// 有qtip(默认)和title两个选择
//		tooltipType: 'title',
		tooltip: '这是一个悬停演示的按钮, 怎么样?<br>是不是很漂亮'
	});
	
	// HTML标记, 没有显示出来提示, To be continued
	Ext.QuickTips.register({
		title: '输入',
		target: 'ta',
		text: '请输入你的呢姓名, 年龄, 是否单身, 身材是否S和祖宗十八代的全部信息!'
	});
});