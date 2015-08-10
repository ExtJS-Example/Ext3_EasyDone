Ext.onReady(function() {
	var data = [
		[1, 'Bill', 'Gardener'],
		[2, 'Ben', 'Horticulturalist'],
		[3, 'Tom', 'Teacher']
	];
	var proxy = new Ext.data.MemoryProxy(data);
	
	var Employee = Ext.data.Record.create([
		{name: 'name', mapping: 1},
		{name: 'occupation', mapping: 2}
	]);
	var arrReader = new Ext.data.ArrayReader({
		idIndex: 1		//  指定第几个元素作为id
	}, Employee);
	
	var store = new Ext.data.Store({
		proxy: proxy,
		reader: arrReader
	});
	store.load();
	
	alert(store);
});
