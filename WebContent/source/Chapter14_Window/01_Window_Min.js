/**
 * Window没有实现最小化, 程序员可以根据客户和业务需求设计更加实用的最小化效果.
 * 本例打算模拟Windows操作系统的桌面. 在桌面下方(或上方)有一个任务栏, 窗口最小化之后会在任务栏生成一个按钮, 点击按钮后窗口随即还原.
 *   为了降低实现难度, 我将任务栏放在页面上方, 坦白说这不是真正的任务栏, 只是工具栏而已. 工具栏上有一个固定不变的按钮, 用来创建新窗口.
 * 新创建的窗口从该按钮飞出, 窗口创建好在工具栏上动态生成一个对应的按钮, 这样, 每次新建的窗口都有唯一的按钮与之对应. 说白点就是: 桌面任务栏的模拟.
 */
var i = 1;
Ext.onReady(function() {
	var newWin = new Ext.Button({
		text: '新建窗口',
		pressed: true,
		handler: function() {
			var win = new Ext.Window({
				title: '窗口'+(i++),
				width: 400,
				height: 300,
				draggable: true,
				minimizable: true,
				listeners: {
					// 最小化窗口事件
					minimize: function(window) {
						window.hide(win.btn.id);
						window.minimizable = true;
					},
					// 关闭窗口事件
					close: function(window) {
						var delObj = document.getElementById(win.btn.id);
						delObj.parentNode.parentNode.removeChild(delObj.parentNode);
						toolBar.remove(win.btn);
						toolBar.doLayout();
					}
					
				}
			});
			win.show(newWin.id);
			win.getUpdater().update({url: 'content.html'});
			
			win.btn = new Ext.Button({
				win: win,		// 自定义属性, 将窗口和按钮关联起来
				id: 'id'+i,
				text: win.title,
				pressed: true,
				handler: function(btn) {
					if(btn.win.minimizable) {
						btn.win.show(btn.id);
						btn.win.minimizable = false;
					} else {
						btn.win.hide(btn.id);
						btn.win.minimizable = true;
					}
				}
			});
			
			toolBar.addButton(win.btn);
			toolBar.doLayout();
		}
	});
	
	var toolBar = new Ext.Toolbar({
		height: 25,
		renderTo: Ext.getBody(),
		items: [newWin]
	});
});










