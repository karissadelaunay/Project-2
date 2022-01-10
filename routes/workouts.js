var router = require('express').Router();

var workoutsCtrl = require('../controllers/workouts');

router.get('/workouts/new/:categoryId', isLoggedIn, workoutsCtrl.new);
router.post('/workouts', isLoggedIn, workoutsCtrl.create);
router.post('/categories/:categoryId/workouts', isLoggedIn, workoutsCtrl.addToCategory)

function isLoggedIn(req, res, next) {
	
	if ( req.isAuthenticated() ) return next();  
	res.redirect('/auth/google'); 
}

module.exports = router;