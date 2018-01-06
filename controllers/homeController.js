

var cheerio = require("cheerio");
var request = require("request");

// Make a request call to grab the HTML body from a website

module.exports = {
 getArticles: function(req,res) { 
	return request("http://abcnews.go.com/", function(error, response, html) {
	  // Load the HTML into cheerio and save it to a variable
	  // '$' becomes a shorthand for cheerio's selector commands, much like jQuery's '$'
	  var $ = cheerio.load(html);

	  // An empty array to save the scraped data
	  var articles = [];

	  //scrape the website!
	  $("ul.headlines-ul a").each(function(i, element) {

	    var link = $(element).attr('href');
	    var title = $(element).text();

	    // Save these results in an object that we'll push into the results array we defined earlier
	    articles.push({
	      title: title,
	      link: link
	    });
	  });

	  // Log the results
		  console.log(articles);
		  res.render('home', {articles: articles});
		})
	}
}