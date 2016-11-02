var express = require('express');
var router = express.Router();

router.use(function(req,res,next){

	if(req.method ==="GET"){
		return next();
	}
	if(!isAuthenticated()){
		return res.redirect('#login');
	}
});


/* GET home page. */
router.route('/posts')



	.get(function(req, res) {
  	
  		res.send({message: "get all the posts"});

	})
	.post(function(req,res){

		res.send({message: "new solvo created"});

	});


//for particular posts

router.route('/posts/:id')

	.get(function(req,res){

		res.send({message: "here is the post for id  " + req.params.id})

	})
	.put(function(req,res){

		res.send({message: "modify the post for id  " + req.params.id})

	})
	.delete(function(req,res){

		res.send({message: "delete the post for id  " + req.params.id})

	});



module.exports = router;

