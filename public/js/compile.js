function run()
{

	fetch('https://ide.geeksforgeeks.org/main.php' , {
		method : 'POST' ,
		body: JSON.stringify({
			lang : 'Python',
			code : 'print("Hello")'
			input : null ,
			save :  false
		}))
	
	
	
	
	
}