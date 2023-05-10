const { Activity, Country } = require('../db')

const  createActivity = async (name, difficulty, duration, season, countryId) => {
    const newActivity = await Activity.create({name, difficulty, duration, season});
    await newActivity.addCountry(countryId);
    return newActivity;
};

const getActivities = async () => {
    return await Activity.findAll({
        attributes: ['name'],
        include: Country
    })
    
}

module.exports = {
    createActivity,
    getActivities
}

