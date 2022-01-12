const {Category, Workout} = require('../models/category');
const User = require('../models/user');
const categories = require('./categories');

module.exports = {
	create, 
    new: newWorkout,
    delete: deleteWorkout
}

    async function create(req, res) {
        console.log(req.body)
        try {
            const sets = parseInt(req.body.sets);
            const reps = parseInt(req.body.reps);
            const workout = await Workout.create({
                workoutName: req.body.workoutName,
                sets: sets,
                reps: reps
            });
            if (req.params.categoryId) {
                const categoryDocument = await Category.findById(req.params.categoryId)
                categoryDocument.workouts.push(workout)
                await categoryDocument.save()
            }
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

    async function deleteWorkout(req, res) {
        console.log(req.body, 'this is my bodyyyyy');
        try {
            console.log(req.params, 'this is the params')
            const workoutDocument = await Workout.findByIdAndDelete(req.params.id);
            const a = await Category.updateMany({},{
                $pull: {workouts: {_id: req.params.id}}
            })
        
         if (!workoutDocument) res.redirect('/categories');
            //res.redirect('/categories');
            res.redirect('/categories');

        } catch(err) {
            console.log(err);
            res.status(500).send();
        }
    };