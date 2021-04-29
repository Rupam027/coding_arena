function stheme()
{
	var select = document.getElementById("theme").value ;
	if(select == "light")
	editor.setTheme("ace/theme/solarized_light");
	
	
	if(select == "dark")
	editor.setTheme("ace/theme/solarized_dark");
}

	
function theme()
{
		
		var select = document.getElementById("language").value ; 
		
		
		if(select == "java")
		{
		
		editor.session.setMode("ace/mode/java");
		editor.setValue("/*WELCOME TO CODING ARENA . \n YOUR CODE GOES HERE*/");   
		editor.clearSelection();
		}
		
		if(select == "python")
		{
		
		
		editor.session.setMode("ace/mode/python");
		editor.setValue("#WELCOME TO CODING ARENA .\n#YOUR CODE GOES HERE");
		editor.clearSelection();
		}
		
		if(select == "c") 
		{
		
		editor.session.setMode("ace/mode/c_cpp");
		editor.setValue("/*WELCOME TO CODING ARENA . \n YOUR CODE GOES HERE*/");
		editor.clearSelection();
		}
		
		if(select == "c++")
		{
		
		editor.session.setMode("ace/mode/c_cpp");
		editor.setValue("/*WELCOME TO CODING ARENA . \n YOUR CODE GOES HERE*/");
		editor.clearSelection();
		}
		
	
	
}       


function compile()
{
	
	
	
	var editor_value = editor.getValue();
	var language = document.getElementById("language").value;
	var input_field = document.getElementById("user_input").value; 
	
	var req = JSON.stringify({ 
		code : editor_value ,
		lang : language , 
		input : input_field ,
		
	}); 
	
	
	fetch('/compile' , {
		method : "POST" , 
		body : req , 
		headers : {
			"accept" : "application/json" ,
			"Content-Type"  : "application/json"
		}
	}).then(res => res.json()).then(json =>{
		if("cmpError" in json)
		document.getElementById("output").value = json.cmpError ;
		else if("rntError" in json)
		document.getElementById("output").value = json.rntError;
		else
		document.getElementById("output").value = json.output ; 
	})
	.catch(console.log);  
	
	
} 

function logout()
{
	sessionStorage.removeItem('User')
	alert("LOGGED OUT SUCCESSFULLY !! HOPE YOU ENJOYED YOUR SESSION");
	window.location.href = '/' ;
	
}

