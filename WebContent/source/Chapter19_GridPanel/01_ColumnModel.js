Ext.onReady(function() {
	// 准备数据
	var data = [{
		name: "李赞红",
		sex: "男",
		birthday: Date.parseDate("1979-04-11", "Y-m-d"),
		edu: "本科",
		memo: "无备注"
	},{
		name: "陈南",
		sex: "男",
		birthday: Date.parseDate("1987-08-06", "Y-m-d"),
		edu: "本科",
		memo: "一个小帅哥哈"
	},{
		name: "易珊静",
		sex: "女",
		birthday: Date.parseDate("1980-05-12", "Y-m-d"),
		edu: "本科",
		memo: "无备注"
	},{
		name: "张海军",
		sex: "男",
		birthday: Date.parseDate("1980-12-11", "Y-m-d"),
		edu: "本科",
		memo: "北大青鸟最帅的老师"
	}];
	
	// Proxy
	var proxy = new Ext.data.MemoryProxy(data);
	
	// Record 定义记录结果
	var Human  = Ext.data.Record.create([
		{name: "Name", type: "string", mapping: "name"},
		{name: "Sex", type: "string", mapping: "sex"},
		{name: "Birthday", type: "string", mapping: "birthday"},
		{name: "Education", type: "string", mapping: "edu"},
		{name: "Memo", type: "string", mapping: "memo"}
	]);
	
	// Reader
	var reader = new Ext.data.JsonReader({}, Human);
	
	// Store
	var store = new Ext.data.Store({
		proxy: proxy,
		reader: reader
	});
	store.load();
	
	// 列模型
	var cm = new Ext.grid.ColumnModel([
		{header: '姓名', width: 80, dataIndex: 'Name', tooltip: '这是您的姓名'},
		{header: '性别', width: 40, dataIndex: 'Sex', align: 'center'},
		{header: '生日', width: 150, dataIndex: 'Birthday', format: 'Y-m-d'},
		{header: '学历', width: 80, dataIndex: 'Education', align: 'center'},
		{id: 'memo', header: '备注', dataIndex: 'Memo'}
	]);
	
	// 组装GridPanel
	var grid = new Ext.grid.GridPanel({
		title: '中国公民',
		width: 600,
		autoHeight: true,
		cm: cm,
		store: store,
		renderTo: 'a',
		autoExpandColumn: 'memo'	// 自动伸展, 占满剩余区域
	});
});



