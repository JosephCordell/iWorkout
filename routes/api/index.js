module.exports = (mongoose) => {
    const router = require("express").Router();
    const workoutRoutes = require("./workouts")(mongoose);

    router.use("/workouts", workoutRoutes);

    return router;
}