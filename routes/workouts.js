var router = require('express').Router();

var workoutsCtrl = require('../controllers/workouts');

router.get('/workouts/new/:categoryId', isLoggedIn, workoutsCtrl.new);
router.post('/categories/:categoryId/workouts', isLoggedIn, workoutsCtrl.create);
router.post('/workouts', isLoggedIn,  workoutsCtrl.create);
router.delete('/workouts/:id', isLoggedIn, workoutsCtrl.delete);
router.put('/workouts/:id', isLoggedIn, workoutsCtrl.update)

function isLoggedIn(req, res, next) {
	
	if ( req.isAuthenticated() ) return next();  
	res.redirect('/auth/google'); 
}

module.exports = router;