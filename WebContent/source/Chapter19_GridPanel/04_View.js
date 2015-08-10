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
	
	// 多选框. 若要实现单选, 配置singleSelect: true
	var sm = new Ext.grid.CheckboxSelectionModel();
	
	// 列模型
	var cm = new Ext.grid.ColumnModel([
		new Ext.grid.RowNumberer(),		// 行号, 23px
		sm,		// 多选框 20px
		{header: '姓名', width: 80, dataIndex: 'Name', tooltip: '这是您的姓名'},
		{header: '性别', width: 40, dataIndex: 'Sex', align: 'center', 
			renderer: function(v) {
				if(v=='男') {
					return '<img src="../../imgs/134.gif">';
				} else {
					return '<img src="../../imgs/133.gif">';
				}
			}
		},
		{header: '生日', width: 150, dataIndex: 'Birthday', renderer: Ext.util.Format.dateRenderer('Y-m-d')},
		{header: '学历', width: 80, dataIndex: 'Education', align: 'center'},
		{id: 'memo', header: '备注', dataIndex: 'Memo'},
		{header: '操作', width:150, dataIndex: '', menuDisabled: true,
			renderer: function() {
				return "<span style='margin-right:10px'><a href='#'>修改</a></span>" +
						"<span><a href='#'>删除</a></span>";
			}
		}
	]);
	
	// 按钮
	var btns = [{
		text: '获取选择行的姓名',
		icon: '../../ext3/resources/images/default/dd/drop-add.gif',
		cls: 'x-btn-text-icon',
		handler: function() {
			var view = grid.getView();			// 得到视图
			var rsm = grid.getSelectionModel();	// 得到行选择模型
			var r = '';
			for(var i=0; i<view.getRows().length; i++) {
				if(rsm.isSelected(i)) {
					r += grid.getStore().getAt(i).get('Name') + '<br>';
				}
			}
			Ext.Msg.alert('选择', '您选择的数据有: <br>' + r);
		}
	}, {
		text: '添加新行到行首',
		icon: "../../ext3/resources/images/default/dd/drop-add.gif",
		cls: "x-btn-text-icon",
		handler: function() {
			var view = grid.getView();
			var obj = {
				Name: "新新人类",
				Sex: "男",
				Birthday: new Date(),
				Education: "本科",
				Memo: "我是新新人类，所向无敌！"
			};

			var human = new Human(obj);
			grid.getStore().insert(0, human);
			view.refresh();
		}
	}, {
		text: '添加新行到行尾',
		icon: "../../ext3/resources/images/default/dd/drop-add.gif",
		cls: "x-btn-text-icon",
		handler: function() {
			var view = grid.getView();
			var obj = {
				Name: "新新人类",
				Sex: "男",
				Birthday: new Date(),
				Education: "本科",
				Memo: "我是新新人类，所向无敌！"
			};

			var human = new Human(obj);
			grid.getStore().add(human);
			view.refresh();
		}
	}, {
		text: '删除选定行',
		icon: "../../ext3/resources/images/default/dd/drop-no.gif",
		cls: "x-btn-text-icon",
		handler: function() {
			var rsm = grid.getSelectionModel();//得到行选择模型
			var view = grid.getView();
			var store = grid.getStore();
			for(var i = view.getRows().length - 1; i >= 0 ; i --){
				if(rsm.isSelected(i)){
					store.remove(store.getAt(i));
				}
			}
			view.refresh();
		}
	}, {
		text: '删除所有行',
		icon: "../../ext3/resources/images/default/dd/drop-no.gif",
		cls: "x-btn-text-icon",
		handler: function() {
			grid.getStore().removeAll();
			grid.getView().refresh();
		}
	}];
	
	// 组装GridPanel
	var grid = new Ext.grid.GridPanel({
		title: '中国公民',
		width: 700,
		autoHeight: true,
		cm: cm,
		sm: sm,
		store: store,
		renderTo: 'a',
		autoExpandColumn: 'memo',	// 自动伸展, 占满剩余区域
		tbar: btns
	});
});



