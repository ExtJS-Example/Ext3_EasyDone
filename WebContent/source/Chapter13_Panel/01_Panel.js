Ext.onReady(function() {
	var panel = new Ext.Panel({
		title: '最简单的Panel',
		width: 400,
		renderTo: 'panel_01',
		titleCollapse: true,	// 使标题栏具备收缩能力(前提collapsible: true)
		collapsible: true,
		html: '    红磨坊，法国一家大型的歌舞表演厅，现在是法国娱乐业中一家效益良好的企业，是巴黎的一个旅游景点。' +
				'据介绍，红磨房歌舞团至今已有110多年的历史，其历史可以追溯到19世纪下半叶。在法国巴黎，红磨坊的舞蹈表演每晚都有。'
	});
});