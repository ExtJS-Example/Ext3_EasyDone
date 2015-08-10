Ext.onReady(function() {
	// 1.定义数据来源
	var proxy = new Ext.data.HttpProxy({
		url: '../../ComboBoxServlet'
	});
	// 2.定义数据解析组织器
	var jsonReader = new Ext.data.JsonReader({
		totalProperty: 'count',		// 总记录数
		root: 'data'		// 所有的数据(json)对象数组)
	}, [
		{name: 'did', type: 'int', mapping: 'did'},
		{name: 'dname', type: 'string', mapping: 'dname'}
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
		displayField: 'dname',
		valueField: 'did',
//		readOnly: true,				// 使combobox不可编辑, 但是加上之后, 显示不了下拉框
		emptyText: '请选择部门',
		mode: 'remote',
		pageSize: 5,
		listWidth: 300
//		listWidth: 200	// width为200时, 分页工具栏显示不全
	});
});