var router = require('express').Router();

var categoriesCtrl = require('../controllers/categories')


router.get('/categories/new', isLoggedIn, categoriesCtrl.new);
router.get('/categories', isLoggedIn, categoriesCtrl.index);
router.get('/categories/:id', isLoggedIn, categoriesCtrl.show);
router.post('/categories', isLoggedIn, categoriesCtrl.create);

function isLoggedIn(req, res, next) {
	
	if ( req.isAuthenticated() ) return next();  
	res.redirect('/auth/google'); 
}

module.exports = router;