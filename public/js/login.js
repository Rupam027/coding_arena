function login(){
	
	if(document.getElementsByTagName("form")[0].reportValidity())
	{
		var email  =  document.getElementById("email").value ;
		var pass  =   document.getElementById("pwd").value ;
		
		
		var req_body = JSON.stringify({
			"email" : email ,  
			"pass" : pass
		});
		
	
	
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
			alert("WELCOME BACK " + email.split('@')[0]);
			window.location.href = '/dashboard';
			 
			}
			else
			document.getElementById("login_error").innerText = "INVALID CREDENTIALS";
			
		}).catch(console.log) ; 
	
	}
	
	
	
	
	
}



