Ext.onReady(function() {
	/**
	 * insertHtml(String positon, HTMLElement el, String html):在指定的元素上插入HTML片段
	 * 参数:
	 * 		1. position: 插入到哪里. 可选值: beforeBegin, afterBegin, beforeEnd, afterEnd
	 * 		2. el: 参照元素
	 * 		3. html: 插入的内容
	 */
//	Ext.DomHelper.insertHtml('afterBegin', Ext.get('e').dom, '<div>中华人民共和国</div>');
	
	/**
	 * 下面的方法都差不多:
	 * insertBefore(/*, Object/String o): 新节点插入到指定节点之前;
	 * insertAfter(/*, Object/String o): 新节点插入到指定节点之后;
	 * insertFirst(/*, Object/String o): 新节点插入到指定节点做为第一个子节点;
	 * appendFirst(/*, Object/String o): 新节点插入到指定节点做为最后一个子节点;
	 * overwrite(/*, Object/String o): 替代指定节点内容.
	 * 参数:
	 * 		1. /*:指定节点, 类型可以为String/HTMLElement/Element
	 * 		2. o:新节点, 可以是dom对象或HTML标记
	 */
	// 在c2之前插入div
//	Ext.DomHelper.insertBefore('c2', '<div>c2-child-before</div>');
	
	// 在c2之后插入div
//	Ext.DomHelper.insertAfter('c2', {tag: 'div', html: 'c2-child-after'});
	
	// 将一个新节点做为parent的第一个子节点
//	Ext.DomHelper.insertFirst('parent', '<div>parent-first-child</div>');
	
	// 将一个新节点做为parent的最后一个子节点
//	Ext.DomHelper.append('parent', {tag: 'div', html: 'parent-last-child'});

	// 将c3的内容更新
	Ext.DomHelper.overwrite('c3', 'There are new contents');
	
	/**
	 * 从例子中可以看出, 新建的节点可以指定多重类型: 既可以是一段HTML标记,也可以是一个Json对象(可以通过cls属性来指定类选择器);
	 */
});














