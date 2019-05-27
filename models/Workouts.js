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
    owner: {
        type: String,
        required: true  
    },
    owner_name: {
        type: String,
        required: true
    },
    lift: String,
    sets: Number,
    reps: Number,
    weight: Number,
    notes: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = Workout = mongoose.model("workout", WorkoutSchema);