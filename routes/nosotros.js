var express = require('express');
var path = require("path");
var router = express.Router();

/* GET nosotros listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('public/nosotros.html'));
});

module.exports = router;
