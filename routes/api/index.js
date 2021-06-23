const router = require('express').Router();
const workoutRoutes = require('./workouts');

router.use('/workouts', workoutRoutes);

module.exports = router;
