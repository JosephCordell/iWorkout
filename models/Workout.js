const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, default: Date.now },
/*     exercises: [
        {
          name : {
            type : String,
            trim : true
          },
          type : {
            type: String,
            trim : true
          },
          distance : {
            type : Number
          },
          duration : {
            type : Number
          },
          sets: {
            type : Number
          },
          weight: {
            type : Number
          },
          reps: {
            type : Number
          }
        }
      ] */
    exercises: { type: Array, required: true },
    totalDuration: { type: Number}
});

const Workout = mongoose.model('workout', WorkoutSchema);

module.exports = Workout;
