const { Router } = require('express');
const activitiesRouter = Router();
const { createActivityHandler, getActivitiesHandler } = require('../handlers/activitiesHandlers');





const validate = (req, res, next) => {
    const {name, difficulty, duration, season} = req.body;
    if(!name || !difficulty || !duration || !season) throw Error("Missing data");

    next();
}


activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.post("/", validate, createActivityHandler);






module.exports = activitiesRouter;