var router = require("express").Router()
var helper = require("../utilities/helpers")


router.get('/', function(request, response) {
	var articles = helper.getArticles()
	response.render('home', { articles })
})

module.exports = router;