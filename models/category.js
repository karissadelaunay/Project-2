const mongoose = require('mongoose');
// const Category = require('../models/category');

const workoutSchema = new mongoose.Schema({
    workoutName: String,
    sets: Number,
    reps: Number,
    userFavorites: {type: Schema.Types.ObjectId, ref: 'User'}
});

const categorySchema = new mongoose.Schema({
    category: String,
    userWorkouts: {type: Schema.Types.ObjectId, ref: 'User'},
    workouts: [workoutSchema]
});

module.exports = mongoose.model('category', categorySchema);