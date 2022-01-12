const {Category, Workout} = require('../models/category');
const User = require('../models/user');

module.exports = {
	create, 
    new: newWorkout,
    // delete: deleteWorkout
    addToCategory
}

async function addToCategory(req, res){

        try { 
            const categoryDocument = await Category.findById(req.params.categoryId)
            const workoutDocument = await Workout.category.push(categoryDocument._id)
            .save();
            res.redirect(`/categories/${categoryDocument._id}`);
    
        } catch(err) {
            res.status(500).send();
        }
    };

    async function create(req, res) {
        console.log(req.body)
        try {
            const sets = parseInt(req.body.sets);
            const reps = parseInt(req.body.reps);
            const workout = await Workout.create({
                sets: sets,
                reps: reps
            });
            console.log(workout, 'this is my workout')
            res.redirect(`/categories/${req.body.category}`);
    
        } catch(err){
            console.log(err)
            res.status(500).send();
        }
    
     };

     async function newWorkout(req, res) {
        try {
            const workoutDocuments = await Workout.find({});
            const categoryId = req.params.categoryId
            res.render('workouts/new',{
                title: 'Add Workout',
                workouts: workoutDocuments,
                categoryId
            });
    
        } catch(err) {
            console.log(err)
            res.status(500).send();
        }
    
    };