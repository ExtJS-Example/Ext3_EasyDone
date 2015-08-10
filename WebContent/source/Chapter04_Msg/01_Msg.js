/**
 * 提示框的语法：
 * Ext.MessageBox.alert(String title, String msg, Function fn, Object scope); 参数定义如下：
 * 1. title：标题
 * 2. msg：提示内容
 * 3. fn：提示框关闭后自动调用的回调函数
 * 4. scope：作用域，用于指定this指向哪里，一般不用管它，特殊情况下有用
 * 
 */
extjsAlert = function() {
	Ext.Msg.alert('提示框', '这是一个提示框');
};

AlertCallback = function() {
	Ext.Msg.alert('提示框', '这是一个提示框', function() {
		alert('提示框关闭了呀');
	});
};

/**
 * 输入框的语法：
 * Ext.MessageBox.prompt(String title, String msg, Function fn, Ojbect scope, Boolean/Number multiline); 参数定义如下
 * 5. multiline：如果为true或为数字，将允许输入多行或者指定默认高度（像素）。
 */
SinglePrompt = function() {
	Ext.Msg.prompt('输入框','请输入您的姓名：', function(btn, txt) {
		Ext.Msg.alert('结果', '您点击了'+btn+'按钮，<br>输入内容为：'+txt);
	});
};

MultiPrompt = function() {
	Ext.Msg.prompt('输入框','请输入您的姓名：', function(btn, txt) {
		Ext.Msg.alert('结果', '您点击了'+btn+'按钮，<br>输入内容为：'+txt);
//	}, this, 300);
	}, this, true);
};

/**
 * 确认框的语法：
 * Ext.MessageBox.confirm(String title, String msg, Function fn, Object scope); 
 */
 Confirm = function() {
	Ext.Msg.confirm('确认框', '请点击下面的按钮做出选择', function(btn) {
		Ext.Msg.alert('您单击的按钮是：', btn);
	});
};

/**
 * 自定义消息框的语法：
 * Ext.Msg.show(Object config); config中常见属性如下：
 * 		title：		消息框标题栏
 * 		msg：		消息内容
 * 		width:		消息框的宽度
 * 		multiline：	是否显示多行文本
 * 		closable：	是否显示关闭按钮
 * 		buttons：	按钮
 * 		icon：		图标
 * 		fn：			回调函数
 * 上面的buttons和icon不熟悉，没有关系，这些选项在Ext.Msg中已有定义
 * buttons按钮的取值如下:
 * 		OK： 确定
 * 		CANCEL:	取消
 * 		OKCANCEL:	确定  取消
 * 		YESNO:	确定  否
 * 		YESNOCANCEL：	确定  否  取消
 * icons图标的取值如下：
 * 		INFO:		信息
 * 		WARNING: 	警告
 * 		QUESTION：	询问
 * 		ERROR: 		错误
 */
Custom = function() {
	var config = {
		title: '自定义对话框',
		msg: '这是一个自定义对话框，想咋搞就咋搞',
		width: 400,
		multiline: true,
		closable: false,	// 默认为true
		buttons: Ext.Msg.YESNOCANCEL,
		icon: Ext.Msg.QUESTION,
		fn: function(btn, txt) {
			Ext.Msg.alert('结果', '您点击了'+btn+'按钮，<br>输入内容为：'+txt);
		} 
	};
	Ext.Msg.show(config);
};


/**
 * 进度条对话框
 * 配置时: progress=true; 进图条的滚动还得通过代码实现
 */
Progress = function() {
	Ext.Msg.show({
		title: '请等待',
		msg: '正在加载项目...',
		progress: true,		// 此属性证明这是一个进度条
		progressText: '正在初始化...',
		width: 300,
		closable: false
	});
	
	var f = function(v) {
		return function() {
			if(v == 12) {
				Ext.Msg.hide();
				Ext.Msg.alert('完成', '所有项目加载完成');
			} else {
				var i= v/11;
				Ext.Msg.updateProgress(i, Math.round(100*i)+'% 已完成.');
			}
		};
	};
	// 设置延时时间逐渐增加的原因是, for循环很快, 瞬间就执行完了, 让12个函数一起执行, 看不出来进度条效果, 故此定时执行
	for(var i=0; i<13; i++) {
		// setTimeout使用的就是闭包.
		setTimeout(f(i), i*500);
	}
};

/**
 * 飞出的消息框
 */
Animal = function() {
	var config = {
		title: '飞出的消息框',
		msg: '这是一个飞出的消息框，飞出来的哦',
		width: 400,
		multiline: true,
		closable: false,	// 默认为true
		buttons: Ext.Msg.YESNOCANCEL,
		icon: Ext.Msg.QUESTION,
		animal: 'fly'
	};
	Ext.Msg.show(config);
};












