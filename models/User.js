//Defining the model of the database.

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//connecting to mongodb database using mongoose
//database used here is remote NoSql database(mlab) 
mongoose.connect('mongodb://admin:admin@ds129600.mlab.com:29600/portfoliodb', function(err){
	if(err){
		console.log('Error:', err);
	}else{
		console.log('Succesfully connected to mongodb database');
	}
	
});
//defining database schema 
var Schema = mongoose.Schema;

var userProfileSchema = new Schema (
	{	
		name : String,
		email_id : String,
		skills : String,
		summary : String 
	},

	{
		collection:'User'
	}
);

var User = mongoose.model('User' , userProfileSchema);

exports.User = User;