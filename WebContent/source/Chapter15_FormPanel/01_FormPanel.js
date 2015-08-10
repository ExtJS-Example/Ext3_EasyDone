Ext.onReady(function() {
	var f = new Ext.FormPanel({
		url: '../../FormServlet',		// 数据传送到服务器的配置
		method: 'post',					// 数据传送方式
		baseParams: {					// 传送时的参数
			extra: '中华人民共和国', 
			id: 100
		},
		title: '欢迎登陆',
		width: 300,
		autoHeight: true,
		bodyStyle: 'padding: 6px',		// 正文区域的样式
		labelAlign: 'right',			// 统一的标签对齐方式
		defaultType: 'textfield',		// 默认组件类型
		frame: true,
		items: [
			new Ext.form.TextField({
				name: 'userName',
				allowBlank: false,		// 不允许为空
				fieldLabel: '用户名'
			}), {
				name: 'password',
				inputType: 'password',	// 输入框类型, 有三种: 文本框, 密码框, 文件域
				allowBlank: false,		
				fieldLabel: '密码'
			}, {
				fieldLabel: '验证码'
			}
		], 
		buttons: [{
			text: '确定',
			handler: function() {
				var userName = f.getForm().findField('userName').getValue();
				var password = f.getForm().findField('password').getValue();
				Ext.Msg.alert('Tips', '用户名: '+userName+', 密码: '+password);
				
				// 提交表单
				f.getForm().submit({
					success: function(form, action) {
						Ext.Msg.alert('成功', '恭喜, 表单提交成功, 服务器反馈的结果是: '+action.result.msg+', 时间:'+action.result.time);
					},
					failure: function(form, action) {
						Ext.Msg.alert('失败', '抱歉, 表单提交失败!');
					}
				});
			}
		}, {
			text: '重置',
			handler: function() {
				f.getForm().reset();
			}
		}]
	});
	f.render('a');
});