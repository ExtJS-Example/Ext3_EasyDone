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
//		lines: false,	// 隐藏连接线, 默认为true
		bbar: []
	});
	
	tree.setRootNode(root);
	tree.render("a");
	tree.expandAll();
});
