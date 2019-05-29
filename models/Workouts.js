const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Workout Schema
// const WorkoutSchema = new Schema ({
//     owner: {
//         type: String, //Key is email address
//         required: true
//     },
//     lifts: [{
//         name : String,
//         sets:[{
//                 reps : Number,
//                 weight : Number,
//         }],
//         notes: String
//     }],
//     cardio: { activity: String, time: String, distance: Number },
//     likes: {
//         type: Number
//     },
//     comments: [{
//         poster: {
//             type: String
//         },
//         body: {
//             type: String
//         }
//     }],
//     private: Boolean
// });

const WorkoutSchema = new Schema ({
    owner: String,
    name: String,
    lifts: String,
    sets: [],
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = Workout = mongoose.model("workout", WorkoutSchema);