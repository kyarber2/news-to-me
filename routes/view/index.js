var router = require("express").Router();
var homeController = require("../../controllers/homeController");


router.get('', homeController.getArticles);

module.exports = router;