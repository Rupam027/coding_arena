function checname(custname) {
       
        
        if (custname != "") {
            document.getElementById('nameerrormessage').style.visibility = 'hidden';
			return true;
            }
        else {
            document.getElementById('nameerrormessage').style.visibility = 'visible';
			document.getElementById('nameerrormessage').innerText = "Enter Valid Name";
			return false;
			
	   }
}

function checcontact(custmobno) {
        mobnoexp = /\d{10}$/;
		
        if (mobnoexp.test(custmobno)) {
            document.getElementById('mobnoerrormessage').style.visibility = 'hidden';
			return true;
        }
        else {
            document.getElementById('mobnoerrormessage').style.visibility = 'visible';
            document.getElementById('mobnoerrormessage').innerText = "Enter Valid Contact No";
			return false;
        }
	}

function checemail(custemail) {
        emailexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;

        
        if (emailexp.test(custemail)) {
            document.getElementById('emailerrormessage').style.visibility = 'hidden';
			return true;
        }
        else {
            document.getElementById('emailerrormessage').style.visibility = 'visible';
            document.getElementById('emailerrormessage').innerText = "Enter Valid Email ID";
			return false;
        }
}

function checpassword(custpassword) {
		
        
		if (custpassword != "") {
            document.getElementById('passerrormessage').style.visibility = 'hidden';
			return true;
        }
        else {
            document.getElementById('passerrormessage').style.visibility = 'visible';
            document.getElementById('passerrormessage').innerText = "Enter Valid Password";
			return false;
        }
    }





function login(){
	
	
	var email  =  document.getElementById("email").value ;
	var pass  =   document.getElementById("pwd").value ;
	if(checemail(email) && checpassword(pass))
	{
	
	var req_body = JSON.stringify({
		"email" : email ,  
		"pass" : pass
	});
	
	console.log(req_body); 
	
	fetch('/user/login' , {
		method : 'POST' , 
		body :  req_body ,
		headers : {
			"accept" : "application/json" ,
			"Content-Type"  : "application/json"
		}
	}).then(res=>res.json()).then(json => {
		if(json.user_exist == true)
		{
		sessionStorage.setItem("User" , json.user_exist) ;
		window.location.href = '/dashboard';
		 
		}
		else
		document.getElementById("login_error").innerText = "INVALID CREDENTIALS";
		
	}).catch(console.log) ; 
	
	}
	
	
	
	
	
}



