const Category = require('../models/category');
const User = require('../models/user');

module.exports = {
	create, 
    // update,
    // delete: deleteWorkout
}

function create(req, res){
	console.log(req.params.id, " req.params.id")
	console.log(req.body, " req.body aka the contents of the form")

    // req.body.workoutName = req.body.workoutName; 

	 req.body.sets = parseInt(req.body.sets)

     req.body.reps = parseInt(req.body.reps)

    Category.findById(req.params.id, function(err, categoryDocument){

		categoryDocument.workouts.push(req.body);
		
		console.log(categoryDocument, " <- this is MovieDocument, in create reviews CTRL")
		
		categoryDocument.save(function(err){

			res.redirect(`/categories/${categoryDocument._id}`)
		})
	
	})
}