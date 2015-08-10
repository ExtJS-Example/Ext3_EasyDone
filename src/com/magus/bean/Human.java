package com.magus.bean;

import java.util.Date;

public class Human {
	private int hid;
	private String name;
	private String sex;
	private Date birthday;
	private String edu;
	private String memo;

	public Human() {}
	
	public Human(int hid, String name, String sex, Date birthday, String edu, String memo) {
		super();
		this.hid = hid;
		this.name = name;
		this.sex = sex;
		this.birthday = birthday;
		this.edu = edu;
		this.memo = memo;
	}

	public int getHid() {
		return hid;
	}

	public void setHid(int hid) {
		this.hid = hid;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSex() {
		return sex;
	}

	public void setSex(String sex) {
		this.sex = sex;
	}

	public Date getBirthday() {
		return birthday;
	}

	public void setBirthday(Date birthday) {
		this.birthday = birthday;
	}

	public String getEdu() {
		return edu;
	}

	public void setEdu(String edu) {
		this.edu = edu;
	}

	public String getMemo() {
		return memo;
	}

	public void setMemo(String memo) {
		this.memo = memo;
	}

}
