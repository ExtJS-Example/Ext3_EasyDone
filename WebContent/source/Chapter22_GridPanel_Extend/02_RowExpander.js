Ext.onReady(function() {
	// 准备数据
	// Proxy
	var proxy = new Ext.data.HttpProxy({url: '../../pager'});
	
	// Record 定义记录结果
	var Human  = Ext.data.Record.create([
		{name: "Hid", type: "int", mapping: "hid"},
		{name: "Name", type: "string", mapping: "name"},
		{name: "Sex", type: "string", mapping: "sex"},
		{name: "Birthday", type: "string", mapping: "birthday"},
		{name: "Education", type: "string", mapping: "edu"},
		{name: "Memo", type: "string", mapping: "memo"}
	]);
	
	// Reader
	var reader = new Ext.data.JsonReader({
		totalProperty: 'totalProperty',
		root: 'root'
	}, Human);
	
	// Store
	var store = new Ext.data.Store({
		proxy: proxy,
		reader: reader
	});
	store.load({params: {start: 0, limit: 6}});
	
	var expander = new Ext.grid.RowExpander({
		tpl: new Ext.Template("<p style='padding:5px;border:1px #DFE8F6 solid;margin:2px;'>" +
				"<span style='color:#15428B; font-weight:bold;'>备注：</span>" +
				"{Memo}</p>")
	});
	
	// 列模型
	var cm = new Ext.grid.ColumnModel([
		expander,
		{header: 'ID', width: 40, dataIndex: 'Hid'},
		{header: '姓名', width: 80, dataIndex: 'Name', tooltip: '这是您的姓名'},
		{header: '性别', width: 40, dataIndex: 'Sex', align: 'center'},
		{header: '生日', width: 150, dataIndex: 'Birthday', 
			renderer: function(v) {
				var date = new Date(Number(v));
				return date.format("Y-m-d");
//				return Ext.util.Format.date(date, 'Y-m-d');
			}
		},
		{id: 'edu', header: '学历', width: 80, dataIndex: 'Education', align: 'center'}
	]);
	
	// 组装GridPanel
	var grid = new Ext.grid.GridPanel({
		title: '中国公民',
		width: 600,
		autoHeight: true,
		cm: cm,
		store: store,
		renderTo: 'a',
		plugins: [expander],
		autoExpandColumn: 'edu',	// 自动伸展, 占满剩余区域
		bbar: new Ext.PagingToolbar({
			store: store,
			pageSize: 6,
			displayInfo: true,
			displayMsg: '本页显示第{0}条到第{1}条记录, 一共{2}条',
			emptyMsg: '没有记录'
		})
		
	});
});





