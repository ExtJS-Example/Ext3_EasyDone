Ext.onReady(function() {
	var picker = new Ext.DatePicker({
		id: 'DatePicker',
		renderTo: Ext.getBody(),
		minDate: Date.parseDate('2000-1-1', 'Y-m-d'),
		maxDate: Date.parseDate('2015-1-1', 'Y-m-d'),
		value: Date.parseDate('2013-11-21', 'Y-m-d'),
		handler: function() {
			Ext.Msg.alert('选择', Ext.util.Format.date(this.getValue(), 'Y-m-d'));
		}
	});
});
