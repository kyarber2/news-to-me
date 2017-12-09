var router = require('express').Router();
var viewRoutes = require('./view/index');

router.use("/", viewRoutes);

module.exports = router