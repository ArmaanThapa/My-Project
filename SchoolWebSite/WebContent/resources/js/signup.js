/**
 * 
 */

$(document).ready(function(){
		$("#registerButton").click(function() {
			console.log("thapa");
    	
    
    	
    $("#error_first_name").html("");
	$("#error_last_name").html("");
	$("#error_password").html("");
	$("#error_confirm_password").html("");
	$("#error_email").html("");
	$("#error_locationCode").html("");
	$("#error_contact_no").html("");
	$("#error_gender").html("");
	$("#error_dob").html("");
//			$("#error_captcha").html("");
	var valid = true;
	var pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"; //pattern for email
	var passwordPattern = /((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+[0-9a-z]+$/i; //pattern for password
	console.log("process registration");
	var firstName = $('#first_name').val();
	var lastName = $('#last_name').val();
	var password  = $('#password').val();
	var confirmpassword  = $('#confirmPassword').val();
	
	
	var email = $('#email').val() ;
	
	var contactNo = $('#contact_no').val() ;
	
	console.log("process registration"); 
    if(contactNo.length==0)
    	{
    	
    
		$("#error_contact_no").html("Enter mobile number");
		valid = false;
    	}
	
    else if(contactNo.length != 10) {
	
		$("#error_contact_no").html("Enter valid mobile number");
		valid = false;
	}
    
    
    

	if(password.length == 0)
	{
		
		$("#common_success").html("Please enter your password");
		valid = false;
	}
	
	else if(password.length <= 5)
	{
		
		$("#common_success").html("Password entered must be 6 to 12 characters long");
		
		valid = false;
	}
	else if(password.length >= 13)
	{
		
		$("#common_success").html("Password entered must be 6 to 12 characters long");
		valid = false;
	}
	
//	else if(!password.match(passwordPattern)) {
//		$("#error_password").html("enter alphanumeric password");
//		valid = false;
//	}
	if(firstName.length <= 0)
	{
		
		$("#common_success").html("Enter your name");
				valid = false;
	}
	
	if(email.length == 0)
	{
		count++;
		 
		  $("#common_success").html("Please enter your email Id ");
		  valid = false;
		 }
	

	else if(!email.match(pattern)) 
	{
			
			$("#common_success").html("Enter valid email Id");
			valid = false;
		}
	
	
	
	

	
	
	
	
	
	
	

if(valid == true) {
	console.log("armaaaaaaaannnnnnnnnnn")

	
	$.ajax({
		
		type : "POST",
		
		contentType : "application/json",
		url : "/WebRegistration/Process",
		dataType : 'json',
		data : JSON.stringify({
			"firstName" : "" + firstName+ "",
			"lastName" : "" + lastName + "",
			"password" : "" + password + "",
			"confirmPassword" :"" + confirmpassword + "",
			"contactno" : "" + contactNo + "",
			"email" : "" + email + "",
			
			
		}),
		success : function(response) {
			
			
			console.log("-----------SIGN UP RESPONSE---------");
//			$( ".captcha_link" ).trigger( "click" );
			$("#registerButton").removeClass("disabled");
			$("#registerButton").html("Sign Up");
			console.log(response);
			
			
			
			if (response.code.includes("S00"))
			{
				
				console.log("success");
				$("#regMessage").modal("show");
				$("#reg_otp_username").val($('#contact_no').val());
				$("#regMessage_success").html("OTP sent to "+ $('#contact_no').val());
			}
			    
				
				else if(response.code.includes("F00"))	
				{
					var msg=[];
					msg  = response.details.split("|");
					
					$("#common_error").modal("show");
					$("#common_success").html(msg[1]);
					
				
					console.log("message 0   "+msg[2]);
					console.log("message 1   "+msg[1]);
					
				if(msg[1].includes("User already exists"))
					{
					$("#common_error").modal("show");
					$("#common_success").html(msg[1]);
					
					}
						
				
					if(msg[1].includes("Email already exists"))
					{
						$("#common_error").modal("show");
						$("#common_success").html(msg[1]);

						
					}
					
					if(msg[1].includes("Enter valid mobile number"))
					{
						$("#common_error").modal("show");
						$("#common_success").html(msg[1]);
					
					}
					
					
					if(msg[1].includes("Not a valid Pincode"))
						{
						$("#common_error").modal("show");
						$("#common_success").html(msg[1]);
						}
				
					     $("#form_error").html(msg);
				}
		}
	});
}


    });


$("#register_resend_otp").click(function() {
	console.log("inside resend mobile OTP");
	$("#register_resend_otp").html(spinnerUrl);
	$("#register_resend_otp").addClass("disabled");
	var recaptcha_response = $("#g-recaptcha-response-1").val();
    console.log("recaptcha response"+recaptcha_response);
	$.ajax({
		type : "POST",
		headers :headers,
		contentType : "application/json",
		url : "/Api/v1/User/Windows/en/WebRegistration/ResendMobileOTP",
		dataType : 'json',
		data : JSON.stringify({
			"mobileNumber" : "" + $('#reg_otp_username').val() + "",
			"captchaResponse":""+recaptcha_response+""
		}),
		success : function(response) {
			$( ".captcha_link" ).trigger( "click" );
			$("#register_resend_otp").html("Resend OTP");
			$("#register_resend_otp").removeClass("disabled");
			console.log(response);
			if (response.code.includes("S00")) {
				console.log("success");
				console.log(response.details);
				$("#regMessage_success").html(response.details);
				$("#fpOTP_message").html(response.details);
			}
		}
	});	
});

$("#forgot_password_request").click(function(){
	console.log("Inside Process Forgot Password");
	var oldVal = $("#fp_submit").val();
	$("#forgot_password_request").addClass("disabled");
	$("#forgot_password_request").val(spinnerUrl);
	var username = $('#fp_username').val();
	/*var recaptcha_response = $("#g-recaptcha-response-2").val();*/
	/*console.log("recaptcha response is"+recaptcha_response);*/
	var valid = true;
	if(username.length != 10){
		valid = false;
		$("#fp_error_username").html("Enter Valid Mobile Number.");
		/*setTimeout(function(){ $('#fp_error_username').hide(); }, 5000);*/
		
	}
	if(valid == false){
		$("#forgot_password_request").removeClass("disabled");
		$("#forgot_password_request").val("Continue");
	}
    if(valid == true){
	console.log("request is true")
	$.ajax({
		type : "POST",
		headers : headers,
		contentType : "application/json",
		url : "/ForgotPassword",
		data : JSON.stringify({
			"username" : "" + $('#fp_username').val() + "",
//			"captchaResponse" : ""+recaptcha_response+""
		}),
		dataType : 'json',
		success : function(response) {
//			$( ".captcha_link" ).trigger( "click" );
//			console.log("Response " + JSON.stringify(response));
			$("#forgot_password_request").val(oldVal)
			$("#forgot_password_request").removeClass("disabled");
			console.log("Reponse Is ::");
			if (response.code.includes("S00")) {
				$("#forgotPassword").modal("hide");
				$("#fpOTP").modal("show");
				$("#fpusername_forgot").val($('#fp_username').val());
				$("#fpOTP_message").html(response.details);
			} else {
				console.log(response.details);
				$("#fp_error_username").text(response.details);
			}
		}
	});
	}
	
});

$("#forgot_password_resend_otp").click(function() {
	$( ".captcha_link" ).trigger( "click" );
	console.log("inside resend mobile OTP forgot Password");
	console.log($('#fpusername_forgot').val());
	var recaptcha_response = $("#g-recaptcha-response-3").val();
	$.ajax({
		type : "POST",
		headers : headers,
		contentType : "application/json",
		url : "/ForgotPassword",
		dataType : 'json',
		data : JSON.stringify({
			"username":""+$('#fpusername_forgot').val()+"",
//			"captchaResponse" : ""+recaptcha_response+""

		}),
		success : function(response) {
//			$( ".captcha_link" ).trigger( "click" );
			console.log(response);
			if (response.code.includes("S00")) {
				console.log("success");
				console.log(response.details);
				$("#fpOTP_message").html(response.details);
			} else{

			}
		}
	});
});

$("#register_verify_mobile").click(function() {
	$( ".captcha_link" ).trigger( "click" );
	console.log("inside verify mobile OTP");
	$.ajax({
		type : "POST",
		headers : headers,
		contentType : "application/json",
		url : "/Api/v1/User/Windows/en/Registration/MobileOTP",
		dataType : 'json',
		data : JSON.stringify({
			"mobileNumber" : "" + $('#reg_otp_username').val() + "",
			"key" : "" + $('#verify_reg_otp_key').val() + ""
		}),
		success : function(response) {
			$( ".captcha_link" ).trigger( "click" );
			console.log(response);
			if (response.code.includes("S00")) {
				$("#first_name").val("");
				$("#last_name").val("");
				$("#password").val("");
				$("#confirm_password").val("");
				$("#email").val("");
				$("#contact_no").val("");
				$("#gender").val("");
				$("#locationCode").val("");
				$("#dob").val("");
				console.log("success");
				$("#regMessage").modal('hide');
				$("#verifiedMessage").modal('show');
				$("#success_verification_message").html(response.details);
				console.log(response.details);
			} else {
				$("#regMessage_success").html(response.details);
			}
		}
	});

});

$("#process_forgot_password_request").click(function() {
	console.log("inside forgot password OTP");
	var username = $('#fpusername_forgot').val();
	var key = $("#fpOTP_key").val();
	var newPassword = $("#fpnewPassword_key").val();
	var confirmPassword =  $('#fpconfirmPassword_key').val() ;
	var valid=true;
	
	console.log("username :: " +username);
	console.log("key :: " +key);
	console.log("newPassword :: " +newPassword);
	console.log("confirmPassword :: " +confirmPassword);
	
	if(key.length == 0){
		$("#error_fpOTP_key").text("Enter OTP");
		valid = false;
	}
	if(newPassword.length == 0){
		$("#error_fpNewPassword").text("Enter password");
		valid = false;
	}else if(newPassword.length <= 5){
		$("#error_fpPassword").text("Password must be 6 to 12 characters long.");
		valid = false;
	}
	else if(newPassword.length >= 13){
		$("#error_fpPassword").text("Password must be 6 to 12 characters long.");
		valid = false;
	}
	
	if(confirmPassword.length == 0){
		$("#error_fpPassword").text("Enter confirm password");
		valid = false;
	}
	if(valid == true){
//		if(newPassword===confirmPassword) {
			console.log("Please enter fields");
			console.log("Pass match ");
			$.ajax({
				type : "POST",
				headers : headers,
				contentType : "application/json",
				url : "/ChangePasswordWithOTP",
				dataType : 'json',
				data : JSON.stringify({
					"username" : "" + $('#fpusername_forgot').val() + "",
					"newPassword" : "" + newPassword + "",
					"confirmPassword" : "" + confirmPassword + "",
					"key" : "" + key + ""
				}),
			
				success : function(response) {
					console.log(response);
					if (response.code.includes("S00")) {
						console.log("success");
						$("#fpOTP").modal("hide");
						$("#successNotification").modal("show");
						$("#success_alert").html(response.details);
					} else if (response.code.includes("F00")){
						console.log("inside faile;  : :: :" + response.details.confirmPassword)
						$("#fpMessage").text(response.details.confirmPassword);
						$("#fpOTP_message").text(response.details.key);
					}
				}
			});
//		}else {
//			console.log("Please enter same password in both fields");
//			$('#error_fpNewPassword').val("Please enter same password in both fields");
//			$("#error_fpPassword").html("Please enter same password in both fields");
//		}
			
		
  }
});

$("#termsConditions").click(function() {
	console.log("inside signup.js file");
	var isChecked = $("#termsConditions").is(":checked");
	console.log(isChecked);
	if (isChecked) {
		console.log(isChecked);
		$("#registerButton").removeClass("disabled");
	} else {
		$("#registerButton").addClass("disabled");
	}
});

	$(".captcha_link").click(function(){
		var $elem = $('.glyphicon-refresh');
		var angle=360;
		$({deg: 0}).animate({deg: angle}, {
			duration: 1000,
			step: function(now) {
				$elem.css({
					transform: 'rotate(' + now + 'deg)'
				});
			}
		});
		$(".captcha_image").attr("src","/Captcha");
	});

	$(".numeric").keydown(function(event){
		if(event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9 || event.keyCode == 27 || event.keyCode == 13 || (event.keyCode == 65 && event.ctrlKey == true) || (event.keyCode >= 35 && event.keyCode<=39)){
			return;
		}else{
			if(event.shiftKey || (event.keyCode < 48 || event.keyCode >57) && (event.keyCode < 96 || event.keyCode > 105)) {
				event.preventDefault();
			}
		}
	});

	$("#forgot_password_modal").click(function(){
		$(".captcha_link").trigger("click");
	})


	function checkStrength(password) {
		var strength = 0
		if (password.length < 6) {
			$('#strength_password').removeClass()
			$('#strength_password').addClass('short')
			return 'Too short'
		}
		if (password.length > 7) strength += 1
		// If password contains both lower and uppercase characters, increase strength value.
		if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1
		// If it has numbers and characters, increase strength value.
		if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) strength += 1
		// If it has one special character, increase strength value.
		if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		// If it has two special characters, increase strength value.
		if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
		// Calculated strength value, we can return messages
		// If value is less than 2
		if (strength < 2) {
			$('#strength_password').removeClass()
			$('#strength_password').addClass('weak')
			return 'Weak'
		} else if (strength == 2) {
			$('#strength_password').removeClass()
			$('#strength_password').addClass('good')
			return 'Good'
		} else {
			$('#strength_password').removeClass()
			$('#strength_password').addClass('strong')
			return 'Strong'
		}
	}
});
