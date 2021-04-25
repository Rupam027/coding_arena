const schema_mongoose =  require('mongoose'); 


const user_schema = schema_mongoose.Schema(
{
	Name : {type : String} , 
	mobile : {type : String} ,
	email : {type : String} , 
	pass : {type : String} 
}); 

module.exports = schema_mongoose.model('USER' , user_schema); 

