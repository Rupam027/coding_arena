function login(){
	
	
	var email  =  document.getElementById("email").value ;
	var pass  =   document.getElementById("pwd").value ;
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
		window.location.href = '/dashboard';
		else
		window.location.href = '/login';
		
	}).catch(console.log) ; 
	
	
	
	
	
	
}



