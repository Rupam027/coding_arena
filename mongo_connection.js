const mongo = require('mongoose') ; 
const url = "mongodb+srv://Rupam:rupam2000@sampledb.yrmym.mongodb.net/ARENA?retryWrites=true&w=majority" ;

mongo.connect(url , { useNewUrlParser: true ,useUnifiedTopology: true }).then(()=>{
	console.log("Database connected"); 
}).catch((err) =>{
	console.log("Error in connecting : " + err.message); 
}); 

module.exports = mongo ; 
