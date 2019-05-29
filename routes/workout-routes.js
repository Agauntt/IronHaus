const express = require("express");;
const router = express.Router();

// Workout Model
const Workout = require("../models/Workouts");

// GET route to return all workouts
router.get("/workouts", (req, res) => {
    // console.log(req.query)
    Workout.find()
        .sort({ date: -1 })
        .then(workout => res.json(workout))
});

// POST route to add a workout
router.post('/workouts', (req, res) => {
    let string = req.body.formData;
    const newWorkout = new Workout({
        owner: string.owner,
        name: string.name,
        lifts: string.lifts,
        sets: string.sets
    });
        newWorkout.save()
            .then(workout => res.json())
        });

module.exports = router;