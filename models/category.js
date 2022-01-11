const mongoose = require('mongoose');
// const User = require('../models/user');
const Schema = mongoose.Schema

const workoutSchema = new Schema({
    workoutName: {
        type: String
    },
    sets: {
        type: Number
    },
    reps: {
        type: Number
    }, 
    userFavorites: {type: Schema.Types.ObjectId, ref: 'User'}
});

const categorySchema = new Schema({
    category: {
        type: String,
        enum: ['Leg Day', 'Arms', 'Back', 'Butt', 'Cardio', 'Stretches', 'Rest Day']
    },
    userCategory: [{type: Schema.Types.ObjectId, ref: 'User'}],
    workouts: {
        type: [workoutSchema]
    }
});

module.exports = mongoose.model('category', categorySchema);