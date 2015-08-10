/**
 * 一个页面只能有一个Viewport
 */
Ext.onReady(function() {
	var panel1 = new Ext.Panel({
		title: '选项卡1',
		html: '中华人民共和国',
		bodyStyle: 'padding: 10px'
	});
	var tabPanel = new Ext.TabPanel({
		width: 500,
		height: 300,
		renderTo: 'd',
		activeItem: 0,
		tbar: [{
			text: "新增标签",
			icon: "../../imgs/world_add.png",
			cls: "x-btn-text-icon",
			handler: function(){
				var id = Ext.id();//生成唯一的ID
				var panel = new Ext.Panel({
					title: id,
					html: "我是一个新面板，ID为" + id,
					bodyStyle: "padding: 10px",
					closable: true
				});
				tabPanel.add(panel);
				tabPanel.setActiveTab(panel);
			}
		}, {
			icon: "../../imgs/database_delete.png",
			cls: "x-btn-text-icon",
			text: "关闭标签",
			handler: function(){
				var activeTab = tabPanel.getActiveTab();
				tabPanel.remove(activeTab);
			}
		}, {
			icon: "../../imgs/database_delete.png",
			cls: "x-btn-text-icon",
			text: "关闭其他标签",
			handler: function(){
				var activeTab = tabPanel.getActiveTab();
				tabPanel.items.each(function(item){
					if(item.closable && item != activeTab){
						tabPanel.remove(item);
					}
				});
			}
		}, {
			icon: "../../imgs/database_delete.png",
			cls: "x-btn-text-icon",
			text: "关闭全部标签",
			handler: function(){
				var activeTab = tabPanel.getActiveTab();
				tabPanel.items.each(function(item){
					if(item.closable){
						tabPanel.remove(item);
					}
				});
			}
		}]
	});
	
	tabPanel.add(panel1);
	tabPanel.setActiveTab(panel1);
});