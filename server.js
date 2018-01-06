var express = require('express');
var mongoose = require('mongoose');
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3000;

var app = express()

var routes = require('./routes/index.js')

app.use(express.static("public"))

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(routes)

var MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017';

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
}).then(
	res => {
		console.log('Connected to MongoDB...');
		console.log('Starting Server...');
		app.listen(PORT, function() {
		  console.log(`Listening on port: ${PORT}`)
		});
	},
	err => {
		console.log('Failed to connect to MongoDB...Exiting application');
	}
);

