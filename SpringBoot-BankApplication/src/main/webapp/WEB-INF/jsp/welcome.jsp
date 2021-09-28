<!DOCTYPE Html>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<Html lang="en"> 
<head>   
	<title>  
		Registration Page  
	</title>  
	<style>
		<style type="text/css">
.welcome-form{
	max-width: 500px;
	padding: 20px 12px 10px 20px;
	font: 13px Arial, Helvetica, sans-serif;
}
.welcome-form-heading{
	font-weight: bold;
	border-bottom: 2px solid #ddd;
	margin-bottom: 20px;
	font-size: 15px;
	padding-bottom: 3px;
}
.welcome-form label{
	display: block;
	margin: 0px 0px 15px 0px;
}
.welcome-form label > span{
	width: 100px;
	font-weight: bold;
	float: left;
	padding-top: 8px;
	padding-right: 5px;
}
.welcome-form span.required{
	color:red;
}
.welcome-form .tel-number-field{
	width: 40px;
	text-align: center;
}
.welcome-form input.input-field, .welcome-form .select-field{
	width: 48%;	
}
.welcome-form input.input-field, 
.welcome-form .tel-number-field, 
.welcome-form .textarea-field, 
 .welcome-form .select-field{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border: 1px solid #C2C2C2;
	box-shadow: 1px 1px 4px #EBEBEB;
	-moz-box-shadow: 1px 1px 4px #EBEBEB;
	-webkit-box-shadow: 1px 1px 4px #EBEBEB;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	padding: 7px;
	outline: none;
}
.welcome-form .input-field:focus, 
.welcome-form .tel-number-field:focus, 
.welcome-form .textarea-field:focus,  
.welcome-form .select-field:focus{
	border: 1px solid #0C0;
}
.welcome-form .textarea-field{
	height:100px;
	width: 55%;
}
.welcome-form input[type=submit],
.welcome-form input[type=button]{
	border: none;
	padding: 8px 15px 8px 15px;
	background: #FF8500;
	color: #fff;
	box-shadow: 1px 1px 4px #DADADA;
	-moz-box-shadow: 1px 1px 4px #DADADA;
	-webkit-box-shadow: 1px 1px 4px #DADADA;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
}
.welcome-form input[type=submit]:hover,
.welcome-form input[type=button]:hover{
	background: #EA7B00;
	color: #fff;
}
</style>
<script>
function validateForm() {
  let x = document.forms["registration-form"]["firstname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  let z = document.forms["registration-form"]["lastname"].value;
  if (z == "") {
    alert("Name must be filled out");
    return false;
  }
}
</script>
</head>  
<body>
<center>
<div class="welcome-form">
<div class="welcome-form-heading"><h2>Registration Form</h2></div>
	<form  action="save-student" name="registration-form" onsubmit="return validateForm()" method="post">  
  				
				<label> Firstname </label>         
				<input type="text" name="firstname" size="15"/> <br> <br>  
				<label> Lastname: </label>         
				<input type="text" name="lastname" size="15"/> <br> <br>  
				<label> Email: </label>         
				<input type="text" name="email" size="15" placeholder="abc@gmail.com"/> <br> <br>  
				  
				<label>   
				Course :  
				</label>   
				<select>  
				<option value="Course">Course</option>  
				<option value="BCA">BCA</option>  
				<option value="BBA">BBA</option>  
				<option value="B.Tech">B.Tech</option>  
				<option value="MBA">MBA</option>  
				<option value="MCA">MCA</option>  
				<option value="M.Tech">M.Tech</option>  
				</select>  
				  
				<br>  
				<br>  
				<label>   
				Gender :  
				</label>
				<input type="radio" name="Gender" value="male"/> Male 
				<input type="radio" name="Gender" value="female"/> Female
				<input type="radio" name="Gender" value="other"/> Other  
				<br>  
				<br>  
				<input type="submit" value="Submit"/>  
	</form>  
	</div>
</center>
</body>  
</Html>  