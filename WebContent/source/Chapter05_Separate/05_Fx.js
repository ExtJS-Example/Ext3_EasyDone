/**
 * ExtJS的动画大部分定义在Ext.Fx中, Ext.Element类也定义了部分动画函数.
 */
Ext.onReady(function() {
	// 在10秒钟之内将div从右边中央滑入
//	Ext.get('a1').applyStyles({
//		position: 'absolute', 
//		top: 200, 
//		left: 200, 
//		backgroundColor: 'red', 
//		width: 100, 
//		heigth: 100
//	}).slideIn('r', {duration: 10});
		
	/**
	 * highlight([String color], [Object options]):根据设置的颜色高亮显示Element对象, 然后渐隐为原始颜色. 默认情况, 高亮显示的背景颜色为黄色.
	 * 参数:
	 * 		color: 起始颜色
	 * 		options: 选项配置
	 */
//	Ext.get('a2').applyStyles({
//		position: 'absolute',
//		top: 200,
//		left: 300,
//		backgroundColor: 'red',
//		width: 100,
//		height: 100
//	}).highlight('0000ff', {	// 起始颜色
//		attr: 'background-color',	// 我们改变的是背景色
//		attr: 'color',	// 我们改变的是文字颜色
//		duration: 2,				// 动画持续时间
//		endColor: 'ff0000'			// 结束颜色, 只能以16进制表示. 起始颜色为蓝色,终止颜色为红色
//	});
	
	/**
	 * frame([String color], [Number count], [Object options]): 展示一个展开的波纹, 伴随着渐隐的边框以突出显示Element对象. 默认情况下是一个淡蓝色的波纹
	 * 参数:	
	 * 		color: 波纹颜色
	 * 		count: 波纹的个数
	 * 		options: 选项配置
	 */
//	Ext.get('a3').applyStyles({
//		position: 'absolute',
//		top: 200,
//		left: 400,
//		backgroundColor: 'red',
//		width: 100,
//		height: 100
//	}).frame('ff0000', 3, {duration: 3});
	
	/**
	 * fadeIn(Object options): 将元素从透明渐变为不透明. 结束时可以根据'endOpcity'选项来指定.
	 */
//	Ext.get('a4').applyStyles({
//		position: 'absolute',
//		top: 200,
//		left: 500,
//		backgroundColor: 'red',
//		width: 100,
//		height: 100
//	}).fadeIn({
//		endOpacity: 1,		// 可以是0到1之间的任意值,例如.5
//		duration: 4
//	});
	
	/**
	 * fadeOut(Object options): 将元素从不透明渐变为透明. 结束时可以根据'endOpcity'选项来指定.
	 */
//	Ext.get('a5').applyStyles({
//		position: 'absolute',
//		top: 200,
//		left: 600,
//		backgroundColor: 'red',
//		width: 100,
//		height: 100
//	}).fadeOut({
//		endOpacity: 0,		// 可以是0到1之间的任意值,例如.5
//		duration: 4,
//		remove: false,
//		useDisplay: false
//	});

	/**
	 * scale(Number width, Number height, [Object options]): 以动画展示元素从开始的高度/宽度转换到结束的高度/宽度.
	 * 参数:
	 * 		width: 结束宽度, 如果为undefined则保持原始宽度
	 * 		height: 结束高度, 如果为undefined则保持原始高度
	 */
//	Ext.get('a6').applyStyles({
//		position: 'absolute',
//		top: 200,
//		left: 700,
//		backgroundColor: 'red',
//		width: 100,
//		height: 100
//	}).scale(100, 100, {duration: 2});
	
	/**
	 * shift(Object options): 以动画展示元素任意组合属性的改变, 如元素的尺寸.位置.透明度. 如果以上属性中的任意一个没有在配置选项对象中指定, 则该属性不会发生改变.
	 * 为了使该特效生效, 则必须在配置选项中设置至少一个新的尺寸.位置坐标或透明度属性.
	 * 
	 */
//	Ext.get('a7').applyStyles({
//		position: 'absolute',
//		top: 200,
//		left: 800,
//		backgroundColor: 'red',
//		width: 100,
//		height: 100
//	}).shift({
//		width: 100,			// 动画终止之后的宽度
//		height: 100,		// 动画终止之后的高度
//		x: 0,				// 动画终止之后的x坐标
//		y: 0,				// 动画终止之后的y坐标
//		opacity: .5,		// 中华终止之后的透明度, 0-1之间的任意值
//		duration: 5			// 动画持续的时间(秒)
//	});
	
	/**
	 * ghost([String anchor], [Object options]): 将元素从视图滑出并伴随着渐隐. 做为可选参数传入的定位锚点将被设置为滑出特效的结束点.
	 */
	Ext.get('a8').applyStyles({
		position: 'absolute',
		top: 200,
		left: 900,
		backgroundColor: 'red',
		width: 100,
		height: 100
	}).ghost('b', {
		easing: 'easeOut',
		duration: .5,
		remove: false,
		useDisplay: false
	});
});














