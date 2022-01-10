var router = require('express').Router();
var usersCtrl = require('../controllers/users');
var workoutsCtrl = require('../controllers/workouts');
var categoriesCtrl = require('../controllers/categories')

// GET /students
router.get('/users', usersCtrl.index);
router.post('/workouts', isLoggedIn, workoutsCtrl.create);
router.get('/categories', isLoggedIn, categoriesCtrl.create);


// Authorizing the user to use a route
// probably only want to use this on
// post, put or delete routes
function isLoggedIn(req, res, next) {
	// req.isAuthenticated() this is given to us by passport
	// it returns true or false
	if ( req.isAuthenticated() ) return next(); // next() go to the next function in middleware, above situation studentsCtrl.addFact
	res.redirect('/auth/google'); // redirect them to login
}



module.exports = router;

