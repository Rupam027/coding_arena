const router = require('express').Router();
const runner = require('./runner') ; 

router.post("/" , (req , res)=>{

	if(req.body.lang == "java")
	language = runner.LANG.JAVA ; 
	
	if(req.body.lang == "python")
	language = runner.LANG.PYTHON3 ;
	
	if(req.body.lang == "cpp")
	language = runner.LANG.CPP14 ;
	
	if(req.body.lang == "c")
	language = runner.LANG.C; 
	
	var req_body = { 
	lang : language , 
	code :  req.body.code , 
	input : req.body.input , 
	save : false 
	}
	console.log(req_body) ; 
	
	runner.run(req_body , function(err , data){
		if(err) 
		console.log(err); 
		res.json(data);
	})
	
	
	
});

module.exports=router;