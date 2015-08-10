Ext.onReady(function() {
	// 定义用于表示订单的数组
	var data = [
		{id: 1, date: new Date(), name: "李世民", address: "中华人民共和国", bank: "中国人民银行", isFast: false}, 
		{id: 2, date: new Date(), name: "搜狗五笔", address: "北京天安门", bank: "中国建设银行", isFast: false}, 
		{id: 3, date: new Date(), name: "宋江", address: "中国古代某处", bank: "中国建设银行", isFast: true}, 
		{id: 4, date: new Date(), name: "李宝田", address: "湖南省株洲市红旗广场", bank: "中国工商银行", isFast: false}
	];
	
	// 定义proxy
	var proxy = new Ext.data.MemoryProxy(data);
	
	var Order = Ext.data.Record.create([
			{name: "ID", type: "int", mapping: "id"},				// 编号
			{name: "DATE", type: "date", mapping: "date"},			// 下单日期
			{name: "NAME", type: "string", mapping: "name"},		// 收货人姓名
			{name: "ADDRESS", type: "string", mapping: "address"},	// 收货人地址
			{name: "BANK", type: "string", mapping: "bank"},		// 交易银行
			{name: "ISFAST", type: "boolean", mapping: "isFast"}	// 交易银行
	]);
	
	// 定义Reader
	var reader = new Ext.data.JsonReader({}, Order);
	
	// 定义store
	var store = new Ext.data.Store({
		proxy: proxy,
		reader: reader,
		autoLoad: true,
		pruneModifiedRecords: true		// 每次store加载后, 清除所有修改过的信息, record被移除后也这样
	});
	
	var banks = [
		["中国建设银行", "中国建设银行"],
		["中国银行", "中国银行"],
		["中国工商银行", "中国工商银行"],
		["中国人民银行", "中国人民银行"]
	];
	
	// 定义列模型
	var cm = new Ext.grid.ColumnModel([
		{header: "订单编号", dataIndex: "ID", width: 60, editor: new Ext.grid.GridEditor(new Ext.form.NumberField({allowBlank: false}))},
		{header: "下单日期", dataIndex: "DATE",width: 140, renderer: Ext.util.Format.dateRenderer("Y-m-d"), 
			editor: new Ext.grid.GridEditor(new Ext.form.DateField({
				format: "Y-m-d"
			}))},
		{header: "收货人姓名", dataIndex: "NAME",width: 120, editor: new Ext.grid.GridEditor(new Ext.form.TextField())},
		{header: "收货人地址", dataIndex: "ADDRESS",id: "ADDRESS", editor: new Ext.grid.GridEditor(new Ext.form.TextField())},
		{header: "交易银行", dataIndex: "BANK",width: 120,
			editor: new Ext.grid.GridEditor(new Ext.form.ComboBox({
				store: new Ext.data.SimpleStore({
					fields: ["value", "text"],
					data: banks
				}),
				displayField: "text",
				valueField: "value",
				mode: "local",
				triggerAction: "all",
//				readOnly: true,
				emptyText: "请选择银行"
			}))},
		{header: "快递", dataIndex: "ISFAST",width: 70,  
			renderer: function(v){return v ? "快递" : "非快递"},
			editor: new Ext.grid.GridEditor(new Ext.form.Checkbox())}
	]);
	
	var buttons = [{
		text: '添加一行',
		icon: "../../ext3/resources/images/default/dd/drop-add.gif",
		cls: "x-btn-text-icon",
		handler: function() {
			var initValue = {
				ID: '',
				DATE: new Date(),
				NAME: "",
				ADDRESS: "",
				BANK: "",
				ISFAST: false
			};
			var order = new Order(initValue);
			grid.stopEditing();				// 停止编辑状态. Stop any active editing.
			grid.getStore().add(order);		// 添加新纪录到store
			
			// 设置脏数据, 表示此条纪录被修改过
			order.dirty = true;
			// 只要一个字段值修改了, 该行的所有值都设置成脏数据
			order.modified = initValue;
			if(grid.getStore().modified.indexOf(order) == -1) {
				grid.getStore().modified.push(order);
			}
		}
	}, {
		text: '删除一行',
		icon: "../../imgs/database_delete.png",
		cls: "x-btn-text-icon",
		handler: function(){
			// 因为store的modified数组只保存修改和添加纪录, 不保存删除纪录, 所以必须自己手动实现删除时与数据库的交互
			var sm = grid.getSelectionModel();
			if(sm.hasSelection()) {		// 判断是否有单元格被选择
				Ext.Msg.confirm('提示', '真的要删除选中的行吗?', function(btn) {
					if(btn == 'yes') {
						var cellIndex = sm.getSelectedCell();	// 返回该单元格的行索引和列索引, 例如[3,4]表示第三行 第四列
						var record = grid.getStore().getAt(cellIndex[0]);	// 得到单元格所在行的纪录record
						grid.getStore().remove(record);
					} else {
						Ext.Msg.alert('错误', '请选择删除的行, 谢谢!');
					}
				});
			}
		}
	}, {
		text: '保存',
		icon: "../../imgs/database_save.png",
		cls: "x-btn-text-icon",
		handler: function() {			// 将新增与修改的数据传到服务器
			var store = grid.getStore();
			var modified = store.modified.slice(0);		// 得到修改过的Record的集合
			var jsonArray = [];			// 新建一数据存放修改的数据
			Ext.each(modified, function(m) {
				//alert(m.data.ADDRESS);//读取当前被修改的记录的地址
				//m.data中保存的是当前Recored的所有字段的值(json)，不包含结构信息
				jsonArray.push(m.data);
				
			});
			
			var r = checkBlank(modified);	// 验证数据是否符合要求
			if(!r){
				return;
			}else{
				//通过ajax请求将修改的记录发送到服务器，最终影响数据库
				Ext.Ajax.request({
					method: "post", //最好不要用get请求
					url: "../../edit",
					success: function(response, config){
						var json = Ext.util.JSON.decode(response.responseText);
						//grid.getStore().reload();
						Ext.Msg.alert("提交成功", json.msg);
					},
					params: {data: Ext.util.JSON.encode(jsonArray)}
				});
			}
		}
	}];
	
	var checkBlank = function(modified/*所有编辑过的Record*/){
		var result = true;
		Ext.each(modified, function(record){
			var keys = record.fields.keys; //获取Record的所有名称
			Ext.each(keys, function(name){
				//根据名称获取对应的值
				var value = record.data[name];
				//找出当前值所在的行索引和列索引
				var colIndex = cm.findColumnIndex(name);
				var rowIndex = grid.getStore().indexOfId(record.id);
				
				//根据行列索引找出组件编辑器
				var editor = cm.getCellEditor(colIndex).field;
				//验证值是否合法
				var r = editor.validateValue(value);
				if(!r){
					Ext.MessageBox.alert("验证", "对不起，您输入的数据非法");
					result = false;
					return;
				}
			});
		});
		return result;
	};
	
	// EditGrid默认是CellSelectionModel
	var grid = new Ext.grid.EditorGridPanel({
		store: store,
		cm: cm,
		autoExpandColumn: "ADDRESS",
		width: 800,
		autoHeight: true,
		renderTo: "a",
		tbar: buttons,
		autoEncode: true //提交时是否自动编码
	});
	
	//删除一行时，同步数据库
	grid.getStore().on("remove", function(s, record, index){
		var jsonArray = [record.data]; //因为Servlet只处理数组，所以先变成数组
		if(record.data.ID != ""){
			Ext.Ajax.request({
				method: "post",
				url: "../EditGirdServlet",
				params: {data: Ext.util.JSON.encode(jsonArray), action: "delete"},
				success: function(response, config){
					var msg = Ext.util.JSON.decode(response.responseText);
					//grid.getStore().reload();
					Ext.Msg.alert("", msg.msg);
				}
			});
		}
	});
	
});





