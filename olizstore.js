//for logout page #####################################

function myFunction(){
    if(confirm("Are you sure to logout")){
        document.write("Successfully logged out!!!");
        window.open("login.html");
    }
}

//for login page ##########################################

function check(form){
	if(form.upname.value=="rajan" && form.psw.value == "4312"){
		window.open("olizstore.html")
	}
	else if(form.upname.value=="ps" && form.psw.value == "ps"){
		window.open("olizstore.html")
}	
    else if(form.upname.value=="prashant123" && form.psw.value == "sah456"){
		window.open("olizstore.html")
	}
		else{
			alert("The username or password is incorrect")
		
	}
}

//for signup page ##############################

function signup()
{
    var name = document.signnup.fName;
    var nam = document.signnup.lName;
    var empl = document.signnup.emplid;
    var email = document.signnup.Email;
    var phone = document.signnup.Phone;
    var course = document.signnup.Subject;
    

    if (name.value == "")
    {
        window.alert("First name should not be EMPTY! Please enter your First name.");
        name.focus();
        return false;
    }
     if (nam.value == "")
    {
        window.alert("Last name should not be EMPTY! Please enter your Last name.");
        nam.focus();
        return false;
    }
    
      if (empl.value == "" || isNaN(empl.value)|| empl.value.length !=8)
    {
        window.alert("PLEASE enter a valid 8 DIGITS EMPL ID");
        empl.focus();
        return false;
    }
    
    if (email.value == "")
    {
        window.alert("EMAIL address should not be EMPTY. PLEASE enter your a valid Email address");
        email.focus();
        return false;
    }
    if (email.value.indexOf("@", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (email.value.indexOf(".", 0) < 0)
    {
        window.alert("Please enter a valid e-mail address.");
        email.focus();
        return false;
    }
    if (phone.value == "" || isNaN(phone.value)|| phone.value.length !=10)
    {
        window.alert("PLEASE enter a valid 10 DIGITS Phone Numbers");
        empl.focus();
        return false;
    }
   
alert("Submitted Successfully.");
   return true;
}

//for psw(forgot password) page ################################
/*   //do as a sign up page; need to modify
function check(form){
	if(form.upname.value=="rajan" && form.psw.value == "4312"){
		window.open("olizstore.html")
	}
	else if(form.upname.value=="lt" && form.psw.value == "lt"){
		window.open("olizstore.html")
	}
	else if(form.upname.value=="prashant123" && form.psw.value == "sah456"){
		window.open("olizstore.html")
	}
		else{
			alert("The username or password is incorrect")
		
	}
}*/