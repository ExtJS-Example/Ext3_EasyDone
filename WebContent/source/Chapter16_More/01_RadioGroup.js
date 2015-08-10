Ext.onReady(function() {
	// 性别男
	var rdaSexBoy = new Ext.form.Radio({
		name: 'rdaSex',
		inputValue: '男',	// 实际值
		boxLabel: '男',		// 显示值
		checked: true		// 默认选中
	});
	
	// 性别女
	var rdaSexGirl = new Ext.form.Radio({
		name: 'rdaSex',
		inputValue: '女',	// 实际值
		boxLabel: '女'		// 显示值
	});
	
	// 性别分组
	var grpSex = new Ext.form.RadioGroup({
		name: 'sex',
		fieldLabel: '性别',
		width: 400,
		items: [rdaSexBoy, rdaSexGirl]
	});
	grpSex.render('a');
});