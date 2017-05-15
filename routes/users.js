var express = require('express');
var router = express.Router();
var User = require('../models/User').User;

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.render('users');
});

//saving post response to database
router.post('/', function(req, res, next){
	var newUser = new User(req.body);
	newUser.save(function (err, result) {
  		if (err) {
  			return handleError(err);
  		}else{

            res.json("success");
  		}
	});
});

module.exports = router;
