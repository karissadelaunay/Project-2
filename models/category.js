const mongoose = require('mongoose');
// const User = require('../models/user');
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    workoutName: String,
    sets: Number,
    reps: Number,
    userFavorites: {type: Schema.Types.ObjectId, ref: 'User'}
});

const categorySchema = new Schema({
    category: {
        String,
        enum: ['Leg Day', 'Arms', 'Back', 'Butt', 'Cardio', 'Stretches']
    },
    userCategory: {type: Schema.Types.ObjectId, ref: 'User'},
    workouts: [workoutSchema]
});

module.exports = mongoose.model('category', categorySchema);