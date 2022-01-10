const Category = require('../models/category');
const User = require('../models/user');

module.exports = {
	create,
    // delete: deleteCategory,
    // new: newCategory,
    // show
}

function create(req, res){

	console.log(req.body)

	// req.body.category = req.body.category; 

	//  req.body.userCategory = (`/categories/${userDocument._id}`)

    //  req.body.workouts = ['workoutName', 'sets', 'reps'];

	Category.create(req.body, function(err, categoryDocument){ 
		console.log(categoryDocument, " <categoryDocument");

		
		res.redirect(`/categories/${categoryDocument._id}`); 
	})


}