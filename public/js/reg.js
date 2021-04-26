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
        emailexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

        
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






function registration()
{
	var user  = document.getElementById("name").value ; 
	var mobile = document.getElementById("contact").value ;
	var email  =  document.getElementById("email").value ;
	var pass  =   document.getElementById("pwd").value ;
	if(checname(user) && checcontact(mobile) && checemail(email) && checpassword(pass))
	{
	
	
	var user_details =JSON.stringify({
		name : user , 
		mob : mobile , 
		email : email , 
		pass : pass
	}); 
	
console.log(user_details);

 fetch("/user/register" , {
		method : "POST" , 
		body : user_details ,
		headers : {
			"accept" : "application/json" ,
			"Content-Type"  : "application/json"
		}
}).then(()=>{
	alert("Registration succesful");
	
	window.location.href="/" ;
	
}).catch(console.log); 

	}
	
}
	