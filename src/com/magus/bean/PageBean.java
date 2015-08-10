package com.magus.bean;

import java.util.List;

public class PageBean {
	private int totalProperty;
	private List root;

	public PageBean() {}
	
	public PageBean(int totalProperty, List root) {
		super();
		this.totalProperty = totalProperty;
		this.root = root;
	}

	public int getTotalProperty() {
		return totalProperty;
	}

	public void setTotalProperty(int totalProperty) {
		this.totalProperty = totalProperty;
	}

	public List getRoot() {
		return root;
	}

	public void setRoot(List root) {
		this.root = root;
	}

}
