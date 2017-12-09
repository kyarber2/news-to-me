

modules.exports = {
	scrapeHeadlines: function(req, res) {
		return getArticles.then(function(articles) {
			return db.create.headline
		}).then(function(dbHeadline) {
			res.json({
				// find stuff and add to database
			})
		})
	}
}