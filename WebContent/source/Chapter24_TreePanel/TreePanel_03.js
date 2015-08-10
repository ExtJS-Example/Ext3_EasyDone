NodeOperator = function(){
	
	return {
		/**
		 * 打印选中节点的信息
		 */
		printNodeInfo: function(selNode){
			if(!selNode){
					Ext.Msg.alert("警告", "没有选择任何节点！");
					return;
			}
			var parentNode = selNode.parentNode;
			var firstChild = selNode.firstChild;
			var lastChild = selNode.lastChild;
			var previousSibling = selNode.previousSibling;
			var nextSibling = selNode.nextSibling;
			
			Ext.MessageBox.alert("INFO", (parentNode ? "父节点：" + parentNode.text : "无父节点")
				+ "<br>" + (firstChild ? "第一个子节点：" + firstChild.text : "无第一个子节点")
				+ "<br>" + (lastChild ? "最后一个子节点：" + lastChild.text : "无最后一个子节点")
				+ "<br>" + (previousSibling ? "上一个兄弟节点：" + previousSibling.text : "无上一个兄弟节点")
				+ "<br>" + (nextSibling ? "下一个兄弟节点：" + nextSibling.text : "无下一个兄弟节点")
				+ "<br>节点路径：" + selNode.getPath("text")
			);
		},
		
		showNodeInfo: function(tree){
			var selNode = tree.getSelectionModel().getSelectedNode();
			this.printNodeInfo(selNode);
		},
		
		/**
		 * 添加同级节点，并且放在节点之前
		 */
		sameLevelBefore: function(tree){
			Ext.MessageBox.prompt("输入", "请输入新节点的名称：", function(btn, txt){
				if(btn == "ok"){
					var newNode = new Ext.tree.TreeNode({text: txt});
					var selNode = tree.getSelectionModel().getSelectedNode();
					if(!selNode){
						Ext.Msg.alert("错误", "在添加新节点之前请先选择参照节点！");
					}else if(selNode.id == tree.getRootNode().id){
						Ext.Msg.alert("错误", "根节点不能添加同级节点！");
					}else{
						selNode.parentNode.insertBefore(newNode, selNode);
					}
				}
			});
		},
		
		/**
		 * 添加同级（之后）
		 */
		sameLevelAfter: function(tree){
			Ext.MessageBox.prompt("输入", "请输入新节点的名称：", function(btn, txt){
				if(btn == "ok"){
					var newNode = new Ext.tree.TreeNode({text: txt});
					var selNode = tree.getSelectionModel().getSelectedNode();
					if(!selNode){
						Ext.Msg.alert("错误", "在添加新节点之前请先选择参照节点！");
					}else if(selNode.id == tree.getRootNode().id){
						Ext.Msg.alert("错误", "根节点不能添加同级节点！");
					}else{
						selNode.parentNode.insertBefore(newNode, selNode.nextSibling);
					}
				}
			});
		},
		
		appendChild: function(tree){
			Ext.MessageBox.prompt("输入", "请输入新节点的名称：", function(btn, txt){
				if(btn == "ok"){
					var newNode = new Ext.tree.TreeNode({text: txt});
					var selNode = tree.getSelectionModel().getSelectedNode();
					if(!selNode){
						//如果没有节点被选择则作为根节点的子节点
						selNode = tree.getRootNode();
					}
					selNode.appendChild(newNode);//增加子节点 
					selNode.expand();//展开子节点
				}
			});
		},
		
		/**
		 * 删除子节点
		 */
		removeChild: function(tree){
			var selNode = tree.getSelectionModel().getSelectedNode();
			if(selNode.id == tree.getRootNode().id){
				Ext.Msg.alert("", "根节点不能删除");
			}else{
				selNode.remove();
			}
		}
	};
}();

Ext.onReady(function(){
	Ext.BLANK_IMAGE_URL = "../../ext3/resources/images/default/s.gif";
	Ext.QuickTips.init();
	
	//定义根节点
	var root = new Ext.tree.TreeNode({text: "根节点"});
	var level_1_1 = new Ext.tree.TreeNode({text: "一级_1"});
	var level_1_2 = new Ext.tree.TreeNode({text: "一级_2"});
	
	var level_1_1_1 = new Ext.tree.TreeNode({text: "二级_1"});
	var level_1_1_2 = new Ext.tree.TreeNode({text: "二级_2"});
	var level_1_1_3 = new Ext.tree.TreeNode({text: "二级_3"});
	
	var level_1_1_3_1 = new Ext.tree.TreeNode({text: "二级_3_1"});
	var level_1_1_3_2 = new Ext.tree.TreeNode({text: "二级_3_2"});
	var level_1_1_3_3 = new Ext.tree.TreeNode({text: "二级_3_3"});
	
	level_1_1.appendChild([level_1_1_1, level_1_1_2, level_1_1_3]);
	level_1_1_3.appendChild([level_1_1_3_1,level_1_1_3_2,level_1_1_3_3]);
	root.appendChild([level_1_1, level_1_2]);
	
	//定义TreePanel
	var tree = new Ext.tree.TreePanel({
		width: 430,
		height: 300,
		title: "树",
		
		bbar: [{
			text: "节点信息",
			icon: "../../imgs/world_add.png",
			cls: "x-btn-text-icon",
			
			handler: function(){NodeOperator.showNodeInfo(tree);}
		},{
			text: "添加同级(前)",
			icon: "../../imgs/world_add.png",
			cls: "x-btn-text-icon",
			
			handler: function(){NodeOperator.sameLevelBefore(tree);}
		},{
			text: "添加同级(后)",
			icon: "../../imgs/world_add.png",
			cls: "x-btn-text-icon",
			
			handler: function(){NodeOperator.sameLevelAfter(tree);}
		},{
			text: "添加子级",
			icon: "../../imgs/world_add.png",
			cls: "x-btn-text-icon",
			
			handler: function(){NodeOperator.appendChild(tree);}
		},{
			text: "删除",
			icon: "../../imgs/world_add.png",
			cls: "x-btn-text-icon",
			
			handler: function(){NodeOperator.removeChild(tree);}
		}]
	});
	
	tree.setRootNode(root);
	tree.render("a");
	tree.expandAll();
	
	//使节点具备修改功能
	var editor = new Ext.tree.TreeEditor(tree, {allowBlank: false});
	
	//处理事件
	editor.on("complete", function(editor, value, startValue){
		alert("原值：" + startValue + ",新值：" + value);
		alert("修改节点：" + editor.editNode);
	});
	
	tree.on("insert", function(tree, parent, node, refNode){
		alert("inserted");
	});
	
	tree.on("remove", function(tree, parent, node){
		alert("removed");
	});
	
	tree.on("append", function(tree, parent, node){
		alert("appended");
	});
})