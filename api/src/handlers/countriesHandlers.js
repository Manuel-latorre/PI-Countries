const { getCountryById, getCountriesByName, getAllCountries, findAllCountries} = require('../controllers/countriesControllers')
const { Country, Activity } = require("../db")


const getCountries = async (req, res) => {
    const { name } = req.query;
    try {
        const results = name ? await getCountriesByName(name) : await findAllCountries()
        if(!results.length){
            return res.status(404).json({message: 'Country not found'})    
        }
        res.status(200).json(results)
    } catch (error) {
        res.status(400).send('Country not found')
    }
}



const getCountriesById = async (req, res) => {
    const { id } = req.params;
    try {
        const country = await getCountryById(id);
        if(country) res.status(200).json(country)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

module.exports = {
    getCountries,
    getCountriesById
}