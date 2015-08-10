/**
 * 要创建一棵树，只需要创建一系列节点，并建立各节点的关系就可以了。
 */
Ext.onReady(function() {
	Ext.QuickTips.init();
	
	// 定义根节点
	var root = new Ext.tree.TreeNode({id: 1, text: "根节点", iconCls:"me-iconCls"});
	var level_1_1 = new Ext.tree.TreeNode({id: 2, text: "一级_1", iconCls:"me-iconCls"});
	var level_1_2 = new Ext.tree.TreeNode({id: 3, text: "一级_2", iconCls:"me-iconCls"});
	
	var level_1_1_1 = new Ext.tree.TreeNode({id: 4, text: "二级_1", iconCls:"me-iconCls"});
	var level_1_1_2 = new Ext.tree.TreeNode({id: 5, text: "二级_2", iconCls:"me-iconCls"});
	var level_1_1_3 = new Ext.tree.TreeNode({id: 6, text: "二级_3", iconCls:"me-iconCls"});
	
	var level_1_1_3_1 = new Ext.tree.TreeNode({id: 7, text: "二级_3_1", iconCls:"me-iconCls"});
	var level_1_1_3_2 = new Ext.tree.TreeNode({id: 8, text: "二级_3_2", iconCls:"me-iconCls"});
	var level_1_1_3_3 = new Ext.tree.TreeNode({id: 9, text: "二级_3_3", iconCls:"me-iconCls"});
	
	level_1_1.appendChild([level_1_1_1, level_1_1_2, level_1_1_3]);
	level_1_1_3.appendChild([level_1_1_3_1,level_1_1_3_2,level_1_1_3_3]);
	root.appendChild([level_1_1, level_1_2]);
	
	// 定义treePanel
	var tree = new Ext.tree.TreePanel({
		width: 200,
		height: 300,
		title: "树",
//		selModel: new Ext.tree.MultiSelectionModel(),	// 允许多选, 默认单选
//		lines: false,	// 隐藏连接线, 默认为true
		bbar: [{
			text: '上',
			icon: '../../imgs/arrow_up.png',
			cls: 'x-btn-text-icon',
			tooltip: '向上选择一个节点',
			tooltipType: 'qtip',
			handler: function() {
				var model = tree.getSelectionModel();
				model.selectPrevious();
			}
		}, {
			text: '下',
			icon: '../../imgs/arrow_down.png',
			cls: 'x-btn-text-icon',
			tooltip: '向下选择一个节点',
			tooltipType: 'qtip',
			handler: function() {
				var model = tree.getSelectionModel();
				model.selectNext();
			}
		}, {
			text: '值',
			icon: '../../imgs/asterisk_yellow.png',
			cls: 'x-btn-text-icon',
			tooltip: '获取被选择的节点的显示文本',
			tooltipType: 'qtip',
			handler: function() {
				var model = tree.getSelectionModel();
				var selectedNode = model.getSelectedNode();
				if(selectedNode) {
					Ext.Msg.alert('文本', selectedNode.text);
				}
			}
		}, {
			text: '选',
			icon: '../../imgs/shape_handles.png',
			cls: 'x-btn-text-icon',
			tooltip: '自定义选择任何节点',
			tooltipType: 'qtip',
			handler: function() {
				Ext.Msg.prompt('路径', '请输入要选择的节点路径', function(btn, txt) {
					if(btn == 'ok') {
						tree.selectPath(txt, 'text');
					}
				});
			}
		}, {
			text: 'ID',
			icon: '../../imgs/page_white_freehand.png',
			cls: 'x-btn-text-icon',
			tooltip: '根据ID进行选择',
			tooltipType: 'qtip',
			handler: function() {
				Ext.Msg.prompt('节点', '请输入要选择的节点ID', function(btn, txt) {
					if(btn == 'ok') {
						var model = tree.getSelectionModel();	// 获取选择模型
						var selNode = tree.getNodeById(txt);	// 根据ID得到节点对象
						model.select(selNode);
					}
				});
			}
		}]
	});
	
	tree.setRootNode(root);
	tree.render("a");
	tree.expandAll();
});
