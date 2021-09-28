package com.deere.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="bank_customer")
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	long id;
	int acc_no;
	String name;
	long balance;
	String email;
	String mobile;
	public Customer() {
		
	}
	public Customer(long id, int acc_no, String name, long balance, String email, String mobile) {
		super();
		this.id = id;
		this.acc_no = acc_no;
		this.name = name;
		this.balance = balance;
		this.email = email;
		this.mobile = mobile;
	}
	public long getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAcc_no() {
		return acc_no;
	}
	public void setAcc_no(int acc_no) {
		this.acc_no = acc_no;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public long getBalance() {
		return balance;
	}
	public void setBalance(long balance) {
		this.balance = balance;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	@Override
	public String toString() {
		return "Customer id=" + id + ", acc_no=" + acc_no + ", name=" + name + ", balance=" + balance + ", email="
				+ email + ", mobile=" + mobile;
	}
	
	
	
}


//pom.xml
//application.properties
//1.bean 2.repo 3.service 4.service implimentation controller packages