var express = require('express');
var router = express.Router();
const path = require('path');
/* GET home page. */
/* GET home page. */
router.get('/', function(req, res, next) {
	  res.sendFile(path.join('/home/chase/client/', 'build', 'index.html'));
});

module.exports = router;

