var mongoose = require("mongoose");
var User = require("./user");

mongoose.connect( process.env.MONGOLAB_URI ||
                  process.env.MONGOHQ_URL || 
                  "mongodb://localhost/calendar_countdown" );

// After creating a new model, require and export it:
module.exports.User = User;