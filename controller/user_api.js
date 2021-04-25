const express = require('express'); 
const router = express.Router(); 
const UserModel = require("../models/user_schema");

router.post('/register' , (req , res)=>{
	const user_obj = new UserModel({
		Name : 	 req.body.name ,
		mobile : req.body.mob , 
		email :  req.body.email , 
		pass :   req.body.pass
	}); 
	
	user_obj.save().
	then((insertdocument)=>{
		res.send(insertdocument);
		
	}).catch((err)=>{
		res.send(err);
	});
});


router.post('/login' , (req , res) =>{
	var x = {
		user_exist : false
	};
	
	UserModel.findOne(
	{
		'email':req.body.email , 
		'pass' :req.body.pass
	}).then((document)=>{
		if(document != null)
		{
			x.user_exist  = true ;
			res.send(JSON.stringify(x));
			
		}
		else
		res.send(JSON.stringify(x));
		
}).catch(res.send);
	
});



module.exports = router;
