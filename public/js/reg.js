function registration()
{
	
	if(document.getElementsByTagName("form")[0].reportValidity())
	{
	var user  = document.getElementById("name").value ; 
	var mobile = document.getElementById("contact").value ;
	var email  =  document.getElementById("email").value ;
	var pass  =   document.getElementById("pwd").value ;
	
	var user_details =JSON.stringify({
		name : user , 
		mob : mobile , 
		email : email , 
		pass : pass
	}); 
	
	check_user_exist(email);


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
	