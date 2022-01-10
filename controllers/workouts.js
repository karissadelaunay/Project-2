const Category = require('../models/category');
const User = require('../models/user');

module.exports = {
	create, 
    // update,
    // delete: deleteWorkout
    addToCategory
}

function addToCategory(req, res){

        try { 
            const categoryDocument = await Category.findById(req.params.categoryId)
            const workoutDocument = await Workout.category.push(categoryDocument._id)
            .save();
            res.redirect(`/categories/${categoryDocument._id}`)
    
        } catch(err) {
    
        }
    }

    async function create(req, res) {
        try {
            const workout = await Workout.create(req.body)
            res.redirect(`/categories/${req.body.category}`);
    
        } catch(err){
    
    }
    
     }