Ext.onReady(function() {
	var myCheckBoxGroup = new Ext.form.CheckboxGroup({
		id: 'checkBox',
		fieldLabel: 'CheckBoxGroup',
		itemCls: 'x-check-group-alt',
		columns: 3,
		items: [
			{boxLabel: '唱歌', name: '1'},
			{boxLabel: '游泳', name: '2', checked: true},
			{boxLabel: '看书', name: '3'},
			{boxLabel: '旅游', name: '4'},
			{boxLabel: '睡觉', name: '5'},
			{boxLabel: '吃饭', name: '6'},
			{boxLabel: '盗墓-七星鲁王', name: '盗1'},
			{boxLabel: '盗墓-怒海潜沙', name: '盗2'},
			{boxLabel: '盗墓-秦岭神树', name: '盗3'},
			{boxLabel: '盗墓-云顶天宫', name: '盗4'},
			{boxLabel: '盗墓-蛇沼鬼城', name: '盗5'},
			{boxLabel: '盗墓-谜海归巢', name: '盗6'},
			{boxLabel: '盗墓-阴山古楼', name: '盗7'},
			{boxLabel: '盗墓-邛楼石影', name: '盗8'},
			{boxLabel: '盗墓-大结局', name: '盗9'}
		]
	});
	
	var myFieldSet = new Ext.form.FieldSet({
		title: 'I am fieldSet',
		renderTo: Ext.getBody(),
		items: [myCheckBoxGroup]
	}); 
	
	// Mehtod 1 : CheckBoxGroup取值方法
	/*for(var i=0; i<myCheckBoxGroup.items.length; i++) {
		myCheckBoxGroup.items.itemAt(i).setValue(true);
	}*/
	
	//Method 2 :  CheckBoxGroup取值方法
	var arr = new Array();
	for(var i=0; i<myCheckBoxGroup.items.length; i++) {
		arr[i] = true;
	}
	myCheckBoxGroup.setValue(arr);
});
