Ext.onReady(function() {
	var form = new Ext.form.FormPanel({
		title: '灵活布局的表单',
		width: 650,
		autoHeight: true,
		frame: true,			// 使Panel主体与主题颜色一致
		layout: 'form',			// 整个大的表单时form布局
		labelWidth: 65,
		labelAlign: 'right',
		items: [{		// 行1
			layout: 'column',	// 从左往右的布局
			items: [{
				columnWidth: .3,	// 该列在整行中所在比例
				layout: 'form',		// 从上往下的布局
				items: [{
					xtype: 'textfield',
					fieldLabel: '姓',
					width: 120
				}]
			}, {
				columnWidth: .3,
				layout: 'form',
				items: [{
					xtype: 'textfield',
					fieldLabel: '名',
					width: 50
				}]
			}, {
				columnWidth: .3,
				layout: 'form',
				items: [{
					xtype: 'textfield',
					fieldLabel: '英文名',
					width: 120
				}]
			}]
		}, {			// 行2
			layout: 'column',
			items: [{
				columnWidth: .5,
				layout: 'form',
				items: [{
					xtype: 'textfield',
					fieldLabel: '座右铭 1',
					width: 180
				}]
			}, {
				columnWidth: .5,
				layout: 'form',
				items: [{
					xtype: 'textfield',
					fieldLabel: '座右铭 2',
					width: 180
				}]
			}]
		}, {			// 行3
			layout: 'form',
			items: [{
				xtype: 'textfield',
				fieldLabel: '奖励',
				width: 500
			}, {
				xtype: 'textfield',
				fieldLabel: '处罚',
				width: 500
			}]
		}, {			// 行4
			layout: 'column',
			items: [{
				layout: 'form',
				columnWidth: .2,
				items: [{
					xtype: 'textfield',
					fieldLabel: '电影最爱',
					width: 50
				}]
			}, {
				layout: 'form',
				columnWidth: .2,
				items: [{
					xtype: 'textfield',
					fieldLabel: '音乐最爱',
					width: 50
				}]
			}, {
				layout: 'form',
				columnWidth: .2,
				items: [{
					xtype: 'textfield',
					fieldLabel: '明星最爱',
					width: 50
				}]
			}, {
				layout: 'form',
				columnWidth: .2,
				items: [{
					xtype: 'textfield',
					fieldLabel: '运动最爱',
					width: 50
				}]
			}]
		}, {			// 行5
			layout: 'form',
			items: [{
				xtype: 'htmleditor',
				fieldLabel: '获奖文章',
				enableLists: false,
				enableSourceEdit: false,
				height: 150
			}]
		}],
		buttonAlign: 'center',
		buttons: [{
			text: '提交'
		}, {
			text: '重置'
		}]
	});
	
	form.render(Ext.getBody());
});
