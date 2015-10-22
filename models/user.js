var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcryptjs");

// create a user Schema
var userSchema = new Schema({
	// create a blueprint for our user object
	email: String,
	passwordDigest: String
	// username: String
});

  // create a new user with secure (hashed) password
userSchema.statics.createSecure = function(password, email, callback){
    // `this` references our schema
    // store it in variable `user` because `this` changes context in nested callbacks

    var user = this;

    // hash password user enters at sign up
    bcrypt.genSalt(function (err, salt) {
      bcrypt.hash(password, salt, function (err, hash) {
        console.log(hash);

        // create the new user (save to db) with hashed password
        user.create({
          email: email,
          passwordDigest: hash
        }, callback);
      });
    });
  };

  // authenticate user (when user logs in)
  userSchema.statics.authenticate = function (password, email, callback) {
    // find user by email entered at log in
    this.findOne({email: email}, function (err, user) {
      console.log(user);

      // throw error if can't find user
      if (!user) {
        console.log('No user with email ' + email);

      // if found user, check if password is correct
      } else if (user.checkPassword(password)) {
        callback(null, user);
      }
    });
  };



  var User = mongoose.model('User', userSchema);

// After creating a new model, require and export it:
module.exports = User;
