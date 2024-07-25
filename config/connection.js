//DB name in connection?
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/social-api");

module.exports=mongoose.connection;