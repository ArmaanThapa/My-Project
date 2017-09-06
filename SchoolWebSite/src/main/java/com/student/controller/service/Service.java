package com.student.controller.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.student.ResponseDto.StudentRegiResponse;
import com.student.dao.StudentDao;
import com.student.dto.LoginDTO;
import com.student.dto.StudentRequestDTO;
import com.student.model.entity.LoginEntity;
import com.student.model.entity.RegisterEntity;

@org.springframework.stereotype.Service
public class Service
{
	private StudentDao studentDao;
	public Service(StudentDao studentDao)
	{	this.studentDao=studentDao;
	}
	

	public boolean seviceDto(StudentRequestDTO dto)
	{
		System.err.println("inside the service method");
		RegisterEntity regiDto=new RegisterEntity();
		 regiDto.setConfirmPassword(dto.getConfirmPassword());
		 regiDto.setPassword(dto.getPassword());
		 regiDto.setEmail(dto.getEmail());
		 regiDto.setContactno(dto.getContactno());
		 regiDto.setFirstName(dto.getFirstName());
		 regiDto.setLastName(dto.getLastName()); 
	    boolean resp=	 studentDao.save(regiDto);
	    if(resp)
	    {return true;
	    }
	    else
	    {return false;
			
		}	
	}


	public boolean login(LoginDTO dto)
	{	
		String pwd=dto.getPassword();
		String password=dto.getPassword();
	RegisterEntity dto1=	studentDao.findByContactNo(dto.getContactno());
	System.out.println("dtooooooooooooooooooooooooooo"+dto);
	if(dto1==null)
	{
		return false;
	}
	
	if(!pwd.equalsIgnoreCase(dto1.getPassword()))
	{
		return false;
	}
	
	LoginEntity login=new LoginEntity();
	login.setContactno(dto1.getContactno());
	login.setPassword(dto1.getPassword());
	boolean b=	studentDao.saveLogin(login);
	if(b)
	{
		return true;
	}
	else
		return false;
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*System.err.println("not from table password"+dto.getPassword());
	
	System.err.println("from the table password"+dto1.getPassword());
	
	System.err.println("Password"+dto1.getPassword());
	System.err.println("Contact No"+dto1.getContactno());
	System.err.println("Email"+dto1.getEmail());
	System.err.println("Name"+dto1.getFirstName());
	System.out.println("contact number from database"+dto1);
	
	LoginEntity login=new LoginEntity();
	
	
	
	if(dto1!=null)
	{
		if(!password.equalsIgnoreCase(dto1.getPassword()))
		{
			return false;
		}	
		else {
			login.setContactno(dto1.getContactno());
			login.setPassword(dto1.getPassword());
		    boolean b=	studentDao.saveLogin(login);
		      if (b) {
			  return true;
		      }
		      else {
		    	  {
		    		  return false;
		    	  }
			}
			

		}	
	}
	else {
		return false;
	}
	
	
*/		
		
	}
			
		
	
	

}
