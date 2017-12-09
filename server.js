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

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://heroku_q3j9zkk3:e3kb7aduss4goh3p1sseevddab@ds129776.mlab.com:29776/heroku_q3j9zkk3"

mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`)
})