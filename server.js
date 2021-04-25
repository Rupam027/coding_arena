const express = require('express');
const bodyparser = require('body-parser');
const app = express() ; 


const conn = require("./mongo_connection") ;
app.use(bodyparser.json()); 
app.listen(5000 , ()=>{
	console.log('Server running at port 5000'); 
}); 


app.use(express.static('public'));


const view_home = require('./views/home'); 
const view_register = require('./views/register');
const view_login = require('./views/login') ; 
const view_dashboard = require('./views/dashboard');

const user_api = require('./controller/user_api');
const compile_api = require('./controller/compile_api'); 


app.use('/' , view_home); 
app.use('/register' , view_register); 
app.use('/login' , view_login); 
app.use('/dashboard',view_dashboard);
app.use('/user' , user_api);
app.use('/compile' , compile_api);



