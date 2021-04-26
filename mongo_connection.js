const mongo = require('mongoose') ; 
const url = process.env['MONGO_URL'] ;

mongo.connect(url , { useNewUrlParser: true ,useUnifiedTopology: true }).then(()=>{
	console.log("Database connected"); 
}).catch((err) =>{
	console.log("Error in connecting : " + err.message); 
}); 

module.exports = mongo ; 
