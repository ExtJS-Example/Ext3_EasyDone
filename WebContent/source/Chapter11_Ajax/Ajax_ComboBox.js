Ext.onReady(function() {
	// 1.定义数据来源
	var proxy = new Ext.data.HttpProxy({
		url: '../../city'
	});
	// 2.定义数据解析组织器
	var jsonReader = new Ext.data.JsonReader({}, [
		{name: 'cid', type: 'int', mapping: 'id'},
		{name: 'cname', type: 'string', mapping: 'name'}
	]);
	// 3.定义Store
	var store = new Ext.data.Store({
		proxy: proxy,
		reader: jsonReader
	});
	
	var combobox = new Ext.form.ComboBox({
		renderTo: Ext.getBody(),
		triggerAction: 'all',
		store: store,
		displayField: 'cname',
		valueField: 'cid',
//		readOnly: true,				// 使combobox不可编辑, 但是加上之后, 显示不了下拉框
		emptyText: '请选择湖南城市'
	});
});