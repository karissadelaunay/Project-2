const Category = require('../models/category');
const User = require('../models/user');

module.exports = {
	create, 
    new: newWorkout,
    // delete: deleteWorkout
    addToCategory
}

async function addToCategory(req, res){

        try { 
            const categoryDocument = await Category.findById(req.params.categoryId);
            const workoutDocument = await Workout.category.push(categoryDocument._id)
            .save();
            res.redirect(`/categories/${categoryDocument._id}`);
    
        } catch(err) {
            res.status(500).send();
        }
    };

    async function create(req, res) {
        try {
            const categoryDocument = await Category.findById(req.params.id);
            workouts.push();
            save();
            res.redirect(`/categories/${req.body.categories}`);
    
        } catch(err){
    
        }
    
     };

     async function newWorkout(req, res) {
        try {
            const workoutDocuments = await Workout.find({});
            const categoryId = req.params.categoryId;
            res.render('workouts/new',{
                title: 'Add Workout',
                workouts: workoutDocuments,
                categoryId
            });
    
        } catch(err) {
    
        }
    
    };