package com.student.validation;

import com.student.ResponseDto.StudentRegiResponse;
import com.student.dto.StudentRequestDTO;
import com.student.model.error.RegisterError;

public class StudentValidation {

	

	public StudentRegiResponse checkValidation(StudentRequestDTO dto)
	{
		
		StudentRegiResponse resp =new StudentRegiResponse();
		boolean success =true;
		if(dto.getContactno().length()!=10 && dto.getContactno().matches("[0-9]+"))
		{
			
			System.err.println("inside validation Armaan");
			resp.setMessage("Please enter valid number");
			success=false;
		}
		if(!dto.getPassword().equalsIgnoreCase(dto.getConfirmPassword()))
		{
			resp.setMessage("Password does not match the confirm password.");
			success=false;
		}
		
		
		System.err.println(resp.isSuccess());
		System.err.println(resp.isSuccess());
		System.err.println(resp.isSuccess());
		resp.setSuccess(success);
		
		
		return resp;
	}

}
