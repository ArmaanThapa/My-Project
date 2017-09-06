package com.student.model.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;

@Entity
@Table(name="RegiTable")

public class RegisterEntity implements Serializable
{
	@Id
	@GenericGenerator(name="ref", strategy="increment")
	@GeneratedValue(generator="ref")
	@Column(name="ID")
	private int id;

	@Column(name="FirstName" ,nullable=false)
	private String firstName;
	
	@Column(name="LastName" ,nullable=false)
	private String lastName;
	
	
	@Column(name="ContactNo" ,nullable=false)
	private String contactno;
	
	@Column(name="Password" ,nullable=false)
	private String password;
	
	@Column(name="Confirmpassword" ,nullable=false)
	private String confirmPassword;
	
	@Column(name="email" ,nullable=false)
	private String email;
	
	
	public RegisterEntity() {
		System.out.println("kinggggggggggggggggggggggggggg");
	}
	
	


	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getConfirmPassword() {
		return confirmPassword;
	}

	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	
	

	public String getContactno() {
		return contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}
	
	
	
	



}
