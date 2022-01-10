var router = require('express').Router();

var categoriesCtrl = require('../controllers/categories')

router.post('/categories', isLoggedIn, categoriesCtrl.create);

function isLoggedIn(req, res, next) {
	
	if ( req.isAuthenticated() ) return next();  
	res.redirect('/auth/google'); 
}

module.exports = router;