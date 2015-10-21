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
	// console.log(req.body);
	// get the form info
	// encrypt the password
	// make a new user in the db
	db.User.create({email: req.body.email, username: req.body.username, password:req.body.password}, function(err, userData){
		if(err){
		console.log('There was an error creating the user: ' + err);
		} else{
			res.json(userData);
		}
	    }
	);

	// send a response (maybe JSON)
	// res.send("You're in!");
});

app.listen(process.env.PORT || 5000);




