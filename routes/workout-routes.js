const express = require("express");;
const router = express.Router();

// Workout Model
const Workout = require("../models/Workouts");

// GET route to return all workouts
router.get("/workouts", (req, res) => {
    console.log(req.query)
    Workout.find()
        .sort({ date: -1 })
        .then(workout => res.json(workout))
});

// POST route to add a workout
router.post('/workouts', (req, res) => {
    console.log('hello from workout log route')
    const newWorkout = new Workout({
        owner: req.body.owner,
        owner_name: req.body.owner_name,
        lift: req.body.lift,
        sets: req.body.sets,
        reps: req.body.reps,
        weight: req.body.weight,
        notes: req.body.notes 
        //     {
        //      name: req.body.name,
        //     }
           
        //     // sets: [{
        //     //     reps: req.body.reps,
        //     //     weight: req.body.weight,
        //     // }],
        //     // notes: req.body.notes,
        // ],
        // cardio: {
        //     activity: req.body.activity,
        //     time: req.body.time,
        //     distance: req.body.distance
        // },
        // private: req.body.private
    });
    newWorkout.save().then(workout => res.json(workout));
})

module.exports = router;