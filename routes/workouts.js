var router = require('express').Router();

var workoutsCtrl = require('../controllers/workouts');

router.post('/workouts', isLoggedIn, workoutsCtrl.create);

function isLoggedIn(req, res, next) {
	
	if ( req.isAuthenticated() ) return next();  
	res.redirect('/auth/google'); 
}

module.exports = router;