/**
 * 为了配合皮肤，需要一张1*1像素的空白图片，但这张图片需联网获取。
 * 现在重新对变量进行赋值，从本地获取
 */
Ext.BLANK_IMAGE_URL = '../../ext3/resources/images/default/s.gif';

/**
 * 一个应用程序的雏形
 */
Ext.onReady(function() {
	// 顶部面板
	var top = new Ext.Panel({
		title: '标题',
		region: 'north',
		height: 80,
		html: 'LOGO'
	});
	
	// 左边面板
	var left = new Ext.tree.TreePanel({
		title: 'Navigation',
		region: 'west',
		width: 200,
		autoScroll: true,
		collapsible: true,
		split: true
	});
	
	// 关键代码
	left.on('click', function(node) {
		var url = node.attributes.url;
		var id = node.attributes.id;	// 如果没有定义，则自动生成一个唯一的ID
		var pan = center.getItem(id);	// 获取节点ID对应的标签面板
		
		if(!url) return;	// 如果该子节点没有链接，直接返回。
		
		if(pan) {		// 如果该标签面板已经存在， 则激活
			center.setActiveTab(pan);
		} else {		// 如果不存在，则创建新的标签面板并激活
			pan = new Ext.Panel({
				title: node.attributes.text,
//					autoLoad: {url:url, scripts: true},
				html: '<iframe src=' + url + ' width="100%" height="100%"></iframe>',
				closable: true,		// 标签上出现关闭按钮
				id: id				// 这里一定要设置
			});
			center.add(pan);
			center.setActiveTab(pan);
		}
	});
	
	// 定义根节点
	var root = new Ext.tree.TreeNode({
		text: '根节点'
	});
	
	// 定义子节点
	var child1 = new Ext.tree.TreeNode({
		text: '子节点1',
		url: '../Chapter10_ComboBox/ComboBox.html'
	});
	
	var child2 = new Ext.tree.TreeNode({
		text: '子节点2',
		url: '../Chapter18_Layout/Layout.html'
	});
	
	var child3= new Ext.tree.TreeNode({
		text: '子节点3',
		url: '../Chapter9_DatePicker/DatePicker.html'
	});
	
	// 向根节点下添加3个子节点
	root.appendChild([child1, child2, child3]);
	// 设置TreePanel的根节点
	left.setRootNode(root);

	// 中央面板
	var center = new Ext.TabPanel({
		region: 'center',
		enableTabScroll: true,
		items: [{
			id: 'opt1',
			title: 'Default Tab',
			html: '欢迎使用北大青鸟办公管理系统'
		}]
	});
	center.setActiveTab('opt1');

	// 底部面板
	var bottom = new Ext.Panel({
		title: 'Information',
		region: 'south',
		bodyStyle: 'padding: 10px; font-size: 12px; text-align: center',
		split: true,
		height: 100,
		minHeight: 100,
		collapsible: true,
		html: '版权所有， 翻版必究！'
	});
	
	var vp = new Ext.Viewport({
		layout: 'border',
		items: [top, left, center, bottom]
	});
	
	// 展开所有节点
	left.expandAll();
});