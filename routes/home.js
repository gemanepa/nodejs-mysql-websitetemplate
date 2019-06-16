var express = require('express');
var path = require("path");
var router = express.Router();

/* GET contacto */
router.get('/', function(req, res, next) {
  res.sendFile(path.resolve('public/home.html'));
});

module.exports = router;
