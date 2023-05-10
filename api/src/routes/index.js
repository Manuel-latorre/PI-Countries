const { Router } = require('express');
const countriesRouter = require('./countriesRouter');
const activitiesRouter = require('./activitiesRouter')


//inserto los routers


const mainRouter = Router();


//configuro los routers
mainRouter.use('/countries', countriesRouter);
mainRouter.use('/activities', activitiesRouter);



module.exports = mainRouter;
