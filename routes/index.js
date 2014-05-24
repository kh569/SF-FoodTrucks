var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', 
  	{ 	title: 'SF - Food Trucks',
  		description:'- a webapp that tells the user what types of food trucks might be found near San Francisco on a map.' 
  	});
});

module.exports = router;
