const { Activity, Country } = require('../db')

const  createActivity = async (name, difficulty, duration, season, countries) => {
    const newActivity = await Activity.create({name, difficulty, duration, season});
    let country = await Country.findAll({
        where: {name: countries}
    })
    return await newActivity.addCountry(country);
    
};



const getActivities = async () => {
    return await Activity.findAll({
        include: {
            model: Country,
            attributes: ['name'],
        }
    })
}

module.exports = {
    createActivity,
    getActivities
}

