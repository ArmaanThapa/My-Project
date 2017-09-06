<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Welcome to Login Page</title>
</head>

<meta http-equiv="Content-Type" content="text/html;
charset=ISO-8859-1">
<link rel="stylesheet" href="//netdna.bootstrapcdn.com/
bootstrap/3.0.0/css/bootstrap.min.css">
<body>
<section>
<div class="jumbotron">
<div class="container">

<h1>${demo}</h1>

<h1>${greeting}</h1>
<h1>${missmatch}</h1>

<form action="/WebRegistration/Login" method="post" >


<p>

<label>Mobile Number</label>

 <input type="text" name="contactno" maxlength="10" id="contact_no" class="numeric"  required>
  <p class="error" id="error_contact_no" class="error"></p>
 

</p>
<p>
<label>Password</label>
 <input type="password" name="password" maxlength="10"  id="password" required >
  <p class="error" id="error_password" class="error"></p>
</p>
<input type="submit" value="login"  >





</form>
</section>
</body>
</html>