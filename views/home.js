
const app = require('express'); 
const router = app.Router(); 
const path = require('path');

router.get('/' , (req,res)=> {
	res.sendFile(path.join(__dirname ,'templates/HomePage.html'));
}); 

module.exports = router ;
