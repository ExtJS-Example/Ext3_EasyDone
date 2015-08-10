/**
 * Template是模板之意, 就是定义一段THML代码, 并放置若干个{}作为占位符,运行时将数据填充到{}中去.
 * 使用XTemplate一般会经历三个步骤:
 * 	1. 定义XTemplate对象, 指定一段HTML代码做为模板;
 *  2. 指定XTemplate中定义的HTML应该放置的位置, 并填充占位符信息;
 *  3. 编译XTemplate
 */
Ext.onReady(function() {
//	var xt = new Ext.XTemplate(
//		'<table border={0} width={1}>',
//			'<tr>',
//				'<td>{2}</td>',
//				'<td>{3}</td>',
//				'<td>{4}</td>',
//			'</tr>',
//		'</table>'
//	);
//	xt.append('xt', [1, 300, '单元格1','单元格2','单元格3']);		// 填充数据是数组

	var xt = new Ext.XTemplate(
		'<table border={b} width={w}>',
			'<tr>',
				'<td>{v1}</td>',
				'<td>{v2}</td>',
				'<td>{v3}</td>',
			'</tr>',
		'</table>'
	);
		xt.append('xt', {b:1, w:300, v1:'单元格1', v2:'单元格2', v3:'单元格3'});		// 填充数据是Json对象
	
	xt.compile();
});














