// SERVER-SIDE JAVASCRIPT

// REQUIREMENTS //
var express = require("express");
var app = express();
var ejs = require("ejs");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var where = require("./utils/where");
var db = require("./models/index");

var where = require("./utils/where");

app.set("view engine", "ejs");

app.use("/static", express.static("./public"));
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function(request, response) {
  response.render("index");
});

// create a new user:
app.post('/users', function(req,res){

	db.User.findOne({email: req.body.email}, function(err, user){
		// console.log(user, " line 28");
		// return user;

		if(user == null){
			db.User.createSecure(req.body.password,  req.body.email, function(err, userData){
				if(err){
					console.log('There was an error creating the user: ' + err);
				} else{
					res.json(userData);
				}
			    }
			);
		} else {
			console.log("user exists");
		}

	});
});

app.listen(process.env.PORT || 5000);




