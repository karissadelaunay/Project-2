const {Category, Workout} = require('../models/category');
const User = require('../models/user');
const categories = require('./categories');

module.exports = {
	create, 
    new: newWorkout,
    delete: deleteWorkout,
    update
}

    async function create(req, res) {
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
        try {
            const workoutDocument = await Workout.findByIdAndDelete(req.params.id);
            const a = await Category.updateMany({},{
                $pull: {workouts: {_id: req.params.id}}
            })
        
         if (!workoutDocument) res.redirect('/categories');
            res.redirect('/categories');

        } catch(err) {
            console.log(err);
            res.status(500).send();
        }
    };

    async function update(req, res) {
        try{
            const workoutDocument = await Workout.findByIdAndUpdate(req.params.id);
            const b = await Workout.updateMany({},{
                $pull: {workouts: {_id: req.params.id}}
            })
            
            
            // const workoutDocument = await req.body.userFavorites === 'on';
            // const b = await Workout.findByIdAndUpdate(req.params.id, req.body);
            // res.redirect('/categories');

        } catch(err) {
            console.log(err)
            res.status(500).send();
        }
    }