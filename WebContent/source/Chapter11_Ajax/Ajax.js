Ext.onReady(function() {
	// Ajax 调用
	Ext.Ajax.request({
		url: '../../TimerServlet',
		params: {name: 'lizanhong'},
		method: 'POST',
		success: function(response, options) {
			alert(options.url+'----'+options.method);
			// 返回数据是字符串
//			Ext.Msg.alert('result', response.responseText);
			// 返回数据是Json
			var result = Ext.util.JSON.decode(response.responseText);
			Ext.Msg.alert('result',result.author+'---'+result.time)
		},
		failure: function() {
			Ext.Msg.alert('result', '请求失败');
		}
	});
});