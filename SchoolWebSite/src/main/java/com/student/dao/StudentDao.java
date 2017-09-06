package com.student.dao;

import org.apache.velocity.app.event.ReferenceInsertionEventHandler.referenceInsertExecutor;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Repository;

import com.hibernate.util.HibernateUtil;
import com.student.ResponseDto.StudentRegiResponse;
import com.student.dto.LoginDTO;
import com.student.model.entity.LoginEntity;
import com.student.model.entity.RegisterEntity;


@Repository
public class StudentDao
{
	public boolean save(RegisterEntity regiDto) 
	{
		 

			System.err.println("inside dao ");
			System.err.println("Regis contact no:::"+regiDto.getContactno());
			System.err.println("email"+regiDto.getEmail());
			System.err.println("fffffff"+regiDto.getFirstName());
			System.err.println("lllllllllll"+regiDto.getLastName());
			System.err.println("pppppppppppp"+regiDto.getPassword());
			System.err.println("cccppppp"+regiDto.getConfirmPassword());
			
			
			Configuration cfg=new Configuration();
			cfg.configure();
		    SessionFactory factory=cfg.buildSessionFactory();
		    Session session=factory.openSession();
		    Transaction transaction=session.beginTransaction();
		
		try {
			session.save(regiDto);
			transaction.commit();
			return true;
			
			
		} catch (Exception e) {
			e.printStackTrace();
			transaction.rollback();
			return false;	
			
		}		
	}

	

	public RegisterEntity findByContactNo(String contactno)
	{
		System.err.println("inside the dao controller");
		System.err.println(contactno);
		Configuration cfg=new Configuration();
		cfg.configure();
	    SessionFactory factory=cfg.buildSessionFactory();
	    Session session=factory.openSession();
	    
	    String hql="select regDTO from RegisterEntity as regDTO where contactno='"+contactno+"'";
	    Query query=session.createQuery(hql);
	    RegisterEntity registerDTO=(RegisterEntity)query.uniqueResult();
	    System.out.println(query);
	    System.out.println(registerDTO);
		return registerDTO;
	}

	public boolean saveLogin(LoginEntity login)
	{
		Configuration cfg=new Configuration();
		cfg.configure();
	    SessionFactory factory=cfg.buildSessionFactory();
	    Session session=factory.openSession();
	    Transaction t=session.beginTransaction();
	    try {
	    	session.save(login);
	    	t.commit();
	    	return true;
			
		} catch (Exception e) {
			e.printStackTrace();
			t.rollback();
		return false;
		}
	    
	    
		
	}
	

}
