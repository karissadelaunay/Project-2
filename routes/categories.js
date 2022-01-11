var router = require('express').Router();

var categoriesCtrl = require('../controllers/categories')

router.post('/categories', isLoggedIn, categoriesCtrl.create);
router.get('/new', isLoggedIn, categoriesCtrl.new);
router.get('/categories', isLoggedIn, categoriesCtrl.index);
router.get('/:id', isLoggedIn, categoriesCtrl.show);

function isLoggedIn(req, res, next) {
	
	if ( req.isAuthenticated() ) return next();  
	res.redirect('/auth/google'); 
}

module.exports = router;