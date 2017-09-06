package com.student.controller.web.user;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.student.ResponseDto.StudentRegiResponse;
import com.student.controller.service.Service;
import com.student.dto.LoginDTO;
import com.student.dto.StudentRequestDTO;
import com.student.validation.StudentValidation;

@RequestMapping(value = "/WebRegistration")
@Controller
public class StudentRegisteration implements MessageSourceAware {
	@Override
	public void setMessageSource(MessageSource arg0) {

	}

	private Service service;
	private StudentValidation validation;

	public StudentRegisteration(Service service, StudentValidation validation) {
		this.service = service;
		this.validation = validation;
	}

	@RequestMapping(method = RequestMethod.POST, value = "/Process")
	public String studRegi(@ModelAttribute StudentRequestDTO dto,
			HttpServletRequest request, HttpServletResponse response,
			Model model) {
		System.err.println(dto.getFirstName());
		System.err.println(dto.getLastName());
		System.err.println(dto.getContactno());
		System.err.println(dto.getEmail());
		System.err.println(dto.getPassword());
		System.err.println(dto.getConfirmPassword());

		StudentRegiResponse regi = new StudentRegiResponse();

		regi = validation.checkValidation(dto);
		if (regi.isSuccess()) {
			System.out.println("validation check");

			boolean resp1 = service.seviceDto(dto);
			if (resp1) {
				model.addAttribute("demo",
						"Congratulations! You have now successfully registered.");
				return "Login";
			} else {
				return "Home";
			}
		} else {
			model.addAttribute("demo", regi.getMessage());
			return "Home";

		}

	}

	@RequestMapping(method = RequestMethod.POST, value = "/Login")
	public String login(@ModelAttribute LoginDTO dto,
			HttpServletRequest request, HttpServletResponse response,
			Model model) {

		System.err.println("inside the login dto" + dto.getContactno());
		System.err.println("inside the login controller" + dto.getPassword());

		boolean resp1 = service.login(dto);

		if (resp1) {
			model.addAttribute("greeting", "You have successfully logged in");
			return "Success";
		} else {
			model.addAttribute("greeting", "User Doesn't exist");
			model.addAttribute("missmatch", "Password Doesn't match");
			return "Login";
		}

	}

}
