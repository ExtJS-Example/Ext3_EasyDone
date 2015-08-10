Ext.onReady(function() {
	var frm = new Ext.form.FormPanel({
		applyTo : "form1",
		autoHeight : true,
		width : 860,
		height : 300,
		frame : true,
		labelWidth : 80,
		labelSeparator : "：",
		title : 'Checkbox与RadioGroup例子',
		items : [{
			layout: 'column',
			border: false,
			items: [{
				xtype: 'fieldset',
				title: '控件名不同',
				height: 110,
				itmes: [{
				}]
			}]
		}],
/*		items : [{
			layout : 'column',
			border : false,
			items : [{
				columnWidth : .5,
				layout : 'form',
				border : false,
				items : [{
					xtype : 'fieldset',
					title : '控件名不同',
					height : 110,
					items : [{
								layout : 'column',
								border : false,
								items : [{
											columnWidth : .5,
											layout : 'form',
											border : false,
											items : [{
														xtype : 'checkbox',
														fieldLabel : '角色',
														boxLabel : '系统管理员',
														name : 'role1',
														anchor : '100%'
													}]
										}, {
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
														xtype : 'checkbox',
														hideLabel : true,
														boxLabel : '经理',
														name : 'role2',
														anchor : '100%'
													}]
										}, {
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
														xtype : 'checkbox',
														hideLabel : true,
														boxLabel : '普通用户',
														name : 'role3',
														anchor : '100%'
													}]
										}]
							}, {
								layout : 'column',
								border : false,
								items : [{
									columnWidth : .3,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : '选择“系统管理员”',
										scope : this,
										handler : function() {
											frm.form.findField('role1')
													.setValue('true');
											Ext.get('op').dom.value += "执行：frm.form.findField('role1').setValue('true')/n";
										}
									}]
								}, {
									columnWidth : .4,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : '不选择“系统管理员”',
										scope : this,
										handler : function() {
											frm.form.findField('role1')
													.setValue('false');
											Ext.get('op').dom.value += "执行：frm.form.findField('role1').setValue('false')/n";
										}
									}]
								}, {
									columnWidth : .3,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : '选择“经理”',
										scope : this,
										handler : function() {
											frm.form.findField('role2')
													.setValue('true');
											Ext.get('op').dom.value += "执行：frm.form.findField('role2').setValue('true')/n";
										}
									}]
								}]
							}, {
								layout : 'column',
								border : false,
								items : [{
									columnWidth : .3,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : '不选择“经理”',
										scope : this,
										handler : function() {
											frm.form.findField('role2')
													.setValue('false');
											Ext.get('op').dom.value += "执行：frm.form.findField('role2').setValue('false')/n";
										}
									}]
								}, {
									columnWidth : .4,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : '选择“普通用户”',
										scope : this,
										handler : function() {
											frm.form.findField('role3')
													.setValue('true');
											Ext.get('op').dom.value += "执行：frm.form.findField('role3').setValue('true')/n";
										}
									}]
								}, {
									columnWidth : .3,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : '不选择“普通用户”',
										scope : this,
										handler : function() {
											frm.form.findField('role3')
													.setValue('false');
											Ext.get('op').dom.value += "执行：frm.form.findField('role3').setValue('false')/n";
										}
									}]
								}]
							}]
				}]
			}, {
				columnWidth : .5,
				bodyStyle : 'padding: 0 0 0 5px',
				layout : 'form',
				border : false,
				items : [{
					xtype : 'fieldset',
					title : '控件名相同',
					height : 110,
					items : [{
								layout : 'column',
								border : false,
								items : [{
											columnWidth : .5,
											layout : 'form',
											border : false,
											items : [{
														xtype : 'checkbox',
														fieldLabel : '角色2',
														boxLabel : '系统管理员',
														name : 'role',
														anchor : '90%',
														inputValue : "系统管理员"
													}]
										}, {
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
														xtype : 'checkbox',
														hideLabel : true,
														boxLabel : '经理',
														name : 'role',
														anchor : '90%',
														inputValue : "经理"
													}]
										}, {
											columnWidth : .25,
											layout : 'form',
											border : false,
											items : [{
														xtype : 'checkbox',
														hideLabel : true,
														boxLabel : '普通用户',
														name : 'role',
														anchor : '90%',
														inputValue : "普通用户"
													}]
										}]
							}, {
								layout : 'column',
								border : false,
								items : [{
									columnWidth : .3,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : 'findField("role")',
										scope : this,
										handler : function() {
											var obj = frm.form
													.findField('role');
											Ext.get('op').dom.value += "执行：var obj=frm.form.findField('role')/n"
													+ 'obj.inputValue：'
													+ obj.inputValue + '/n';
										}
									}]
								}, {
									columnWidth : .4,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : "setValue('true')",
										scope : this,
										handler : function() {
											frm.form.findField('role')
													.setValue('true');
											Ext.get('op').dom.value += "执行：frm.form.findField('role').setValue('true')/n";
										}
									}]
								}, {
									columnWidth : .3,
									layout : 'form',
									border : false,
									items : [{
										xtype : 'button',
										text : "setValue('false')",
										scope : this,
										handler : function() {
											frm.form.findField('role')
													.setValue('false');
											Ext.get('op').dom.value += "执行：frm.form.findField('role').setValue('false')/n";
										}
									}]
								}]
							}]
				}]
			}]
		}, {
			xtype : 'fieldset',
			title : 'RadioGroup',
			height : 60,
			items : [{
				layout : 'column',
				border : false,
				items : [{
							columnWidth : .3,
							layout : 'form',
							border : false,
							items : [{
										xtype : 'ux-radiogroup',
										fieldLabel : '性别',
										name : 'sex',
										horizontal : true,
										radios : [{
													value : '男',
													checked : true,
													boxLabel : '男'
												}, {
													value : '女',
													boxLabel : '女'
												}]
									}]
						}, {
							columnWidth : .3,
							layout : 'form',
							border : false,
							items : [{
								xtype : 'button',
								text : "setValue('男')",
								scope : this,
								handler : function() {
									frm.form.findField('sex').setValue('男');
									Ext.get('op').dom.value += "执行：frm.form.findField('sex').setValue('男')/n";
								}
							}]
						}, {
							columnWidth : .3,
							layout : 'form',
							border : false,
							items : [{
								xtype : 'button',
								text : "setValue('女')",
								scope : this,
								handler : function() {
									frm.form.findField('sex').setValue('女');
									Ext.get('op').dom.value += "执行：frm.form.findField('sex').setValue('女')/n";
								}
							}]
						}]
			}]
		}, {
			layout : 'column',
			border : false,
			items : [{
				columnWidth : .5,
				layout : 'form',
				border : false,
				items : [{
					xtype : 'button',
					text : "form.setValues({role1:true,role:true,sex:'男'})",
					scope : this,
					handler : function() {
						frm.form.setValues({
									role1 : true,
									role : true,
									sex : '男'
								});
						Ext.get('op').dom.value += "执行：frm.form.setValues({role1:true,role:true,sex:'男'})/n";
					}
				}]
			}, {
				columnWidth : .5,
				layout : 'form',
				border : false,
				items : [{
					xtype : 'button',
					text : "form.getValues()",
					scope : this,
					handler : function() {
						Ext.get('op').dom.value += "执行：frm.form.getValues()/n"
								+ '结果：'
								+ Ext.encode(frm.form.getValues())
								+ '/n';
					}
				}]
			}]
		}],*/
		buttons : [{
			text : '保存',
			scope : this,
			handler : function() {
				if (frm.form.isValid()) {
					frm.form.doAction('submit', {
								url : 'form.ashx',
								method : 'post',
								params : '',
								success : function(form, action) {
									Ext.Msg.alert('操作', action.result.data);
								},
								failure : function() {
									// Ext.Msg.alert('操作','保存失败！');
								}
							});
				}
			}
		}, {
			text : '取消',
			scope : this,
			handler : function() {
				frm.form.reset();
			}
		}]
	});
})
