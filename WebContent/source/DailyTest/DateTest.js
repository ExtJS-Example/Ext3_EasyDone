Ext.onReady(function() {
	// long = 1398397848135
	var now = new Date();
	var mill = now.getMilliseconds();
	console.log(mill);
	
	// 如果是long 
	var ld = new Date("1398397848135");
	console.log(ld);
});
