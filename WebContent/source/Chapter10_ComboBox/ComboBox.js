Ext.onReady(function() {
	// 数组数据
//	var data = [
//		[1, '长沙市'],
//		[1, '株洲市'],
//		[1, '湘潭市'],
//		[1, '邵阳市']
//	];
	
//	var City = new Ext.data.Record.create([
//		{name: 'cid', type: 'int', mapping: 0},
//		{name: 'cname', type: 'string', mapping: 1}
//	]);
//	var reader = new Ext.data.ArrayReader({}, City);
//	var reader = new Ext.data.ArrayReader({}, [
//		{name: 'cid', type: 'int', mapping: 0},
//		{name: 'cname', type: 'string', mapping: 1}
//	]);
	
	// json数据
	var data = [
		{value: '1', name: '长沙市'},
		{value: '2', name: '株洲市'},
		{value: '3', name: '湘潭市'},
		{value: '4', name: '邵阳市'}
	];
	var reader = new Ext.data.JsonReader({}, [
		{name: 'cid', type: 'int', mapping: 'value'},
		{name: 'cname', type: 'string', mapping: 'name'}
	]);
	
	var proxy = new Ext.data.MemoryProxy(data);
	
	var store = new Ext.data.Store({
		proxy: proxy,
		reader: reader,
		autoLoad: true
	});
	
	var combobox = new Ext.form.ComboBox({
		renderTo: Ext.getBody(),
		triggerAction: 'all',
		store: store,
		displayField: 'cname',
		valueField: 'cid',
		mode: 'local',
		emptyText: '请选择湖南城市'
	});
		
	var btn = new Ext.Button({
		text: '列表框的值',
		renderTo: Ext.getBody(),
		handler: function(btn) {
			Ext.Msg.alert('当前值', 'RawValue(显示值): ' + combobox.getRawValue() + ', value(实际值): ' + combobox.getValue());
		}
	});
});
