package com.student.controller.web;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.MessageSourceAware;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class MainController implements MessageSourceAware {
	
	
	
	protected final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	private MessageSource source;

	@Override
	public void setMessageSource(MessageSource source) 
	{
		this.source=source;
	}
	
	@RequestMapping(method=RequestMethod.GET,value="/")
	public String main( Model model)
	 {
		model.addAttribute("greeting", "Welcome to Registeration Page");
		
		return "Home";
		
	 }
	
	

}
