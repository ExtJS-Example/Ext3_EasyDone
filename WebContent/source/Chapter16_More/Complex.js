Ext.onReady(function() {
	// 姓名
	var txtName = new Ext.form.TextField({
		name: 'txtName',
		fieldLabel: '姓名',
		width: 200
	});
	
	// 密码
	var txtPassword = new Ext.form.TextField({
		name: 'txtPassword',
		fieldLabel: '密码',
		inputType: 'password',
		width: 200
	});
	
	// 性别分组
	var grpSex = new Ext.form.RadioGroup({
		name: 'sex',
		fieldLabel: '性别',
		width: 100,
		items: [{
			name: 'rdaSex',
			inputValue: '男',	// 实际值
			boxLabel: '男',		// 显示值
			checked: true		// 默认选中
		}, {
			name: 'rdaSex',
			inputValue: '女',	// 实际值
			boxLabel: '女'		// 显示值
		}]
	});
	
	// 出生日期
	var dateBirthday = new Ext.form.DateField({
		name: 'dateBirthday',
		fieldLabel: '出生日期',
		width: 200,
		format: 'Y-m-d',
		value: new Date()
	});
	
	// 爱好
	var grpHobby = new Ext.form.CheckboxGroup({
		name: 'hobby',
		fieldLabel: '您的爱好',
		width: 300,
		items: [{
			name: 'chkHobby',
			inputValue: '钓鱼',
			boxLabel: '钓鱼',
			checked: true
		}, {
			name: 'chkHobby',
			inputValue: '网友聚会',
			boxLabel: '网友聚会'
		}, {
			name: 'chkHobby',
			inputValue: '洗桑拿',
			boxLabel: '洗桑拿'
		}, {
			name: 'chkHobby',
			inputValue: '打保龄球',
			boxLabel: '打保龄球'
		}]
	});
	
	// 学历
	var store = new Ext.data.ArrayStore({
		fields: [
			{name: "eid", type: "int", mapping: 0},
			{name: "ename", type: "string", mapping: 1}
		],
		data: [
			[1, "博士"],
			[2, "硕士"],
			[3, "研究生"],
			[4, "本科"],
			[5, "专科"],
			[6, "大学肄业"],
			[7, "文盲"]
		]
	});
	var chkEdu = new Ext.form.ComboBox({
		name: 'chkEdu',
		fieldLabel: '最高学历',
		store: store,
		mode: 'local',
		triggerAction: 'all',
		emptyText: '请选择最高学历',
		displayField: 'ename',
		valueField: 'eid',
		value: 3	// 缺省值
	});
	
	// 数字输入框
	var numberLove = new Ext.form.NumberField({
		name: 'numLove',
		fieldLabel: '最喜欢的数字'
	});
	
	// 家庭地址
	var areaAddress = new Ext.form.TextArea({
		name: 'areaAddress',
		fieldLabel: '家庭住址',
		width: 500,
		height: 50
	});
	
	// 上班时间
	var timeWork = new Ext.form.TimeField({
		name: 'timeWork',
		fieldLabel: '上班时间',
		increment: 30,		// 配置时间选择点的间隔, 默认15分钟
		format: 'H:i'
	});
	
	// 个人简介
	var htmlIntro = new Ext.form.HtmlEditor({
		name: 'htmlIntro',
		fieldLabel: '个人简介',
		enableLists: false,
		enableSourceEdit: false,
		height: 150
	});
	
	// 照片
	var txtPhoto = new Ext.form.TextField({
		name: 'txtPhoto',
		inputType: 'file',
		fieldLabel: '照片',
		width: 500
	});
	
	// 提交按钮
	var btnSubmit = new Ext.Button({
		text: '提交',
		handler: function() {
			formPanel.getForm().submit({
				success: function(form, action) {
					console.long('服务器返回数据成功!');
					form.items.each(function(field){
						if(field.isFormField){
							alert(field.getName() + "=" + field.getValue());
						}
					});
				},
				failure: function() {
					Ext.Msg.alert('失败', '对不起, 表单提交失败!');
				}
			});
		}
	});
	
	// 重置按钮
	var btnReset = new Ext.Button({
		text: '重置',
		handler: function() {
			formPanel.getForm().reset();
		}
	});
	
	var formPanel = new Ext.form.FormPanel({
		url: '../../FormPanel',
		method: 'post',
		title: '新增员工',
		width: 650,
		autoHeight: true,
		labelAlign: 'right',
		frame: true,
		style: 'padding:10px',
		items: [
			txtName, 		// 姓名
			txtPassword, 	// 密码
			grpSex,			// 性别
			dateBirthday,	// 出生日期
			grpHobby,		// 兴趣爱好
			chkEdu,			// 学历
			numberLove,		// 最喜欢的数字
			areaAddress,	// 家庭地址
			timeWork,		// 上班时间
			htmlIntro,		// 个人简介
			txtPhoto		// 照片
		],
		buttons: [btnSubmit, btnReset]
	});
	formPanel.render('a');
});