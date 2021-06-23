const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },
    exercises: { type: Array, required: true },
    totalDuration: { type: Number}
});

const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;
