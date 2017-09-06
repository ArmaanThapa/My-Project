package com.student.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="login_user")
public class LoginEntity implements Serializable
{
	
	@Id
	@GenericGenerator(name="ref", strategy="increment")
	@GeneratedValue(generator="ref")
	@Column(name="ID")
	private int id;
	
	@Column(name="Password" ,nullable=false)
	private String password;
	
	
	@Column(name="ContactNo" ,nullable=false)
	private String contactno;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}


	public String getContactno() {
		return contactno;
	}


	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	

}
