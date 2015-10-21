var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcryptjs = require("bcryptjs");

// create a user Schema
var userSchema = new Schema({
	// create a blueprint for our user object
	email: String,
	passwordDigest: String,
	username: String
});

// salt and hash the password when creating
userSchema.statics.createSecure = function(username, password, email, callback){
		// scramble up the p-word using bcryptjs
		// store the information in the database
		// create an object with the username, email and passwordDigest
		// create db record based on the object
	};

var User = mongoose.model('User', userSchema);

// After creating a new model, require and export it:
module.exports = User;
