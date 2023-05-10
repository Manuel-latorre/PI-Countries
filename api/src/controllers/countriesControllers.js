const axios = require('axios')
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');


const getCountryById = async (id) => {
    const countryId = await Country.findByPk(id, {include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
    }})
    return countryId;
}

const getAllCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3/all');
        const countries = response.data;
        
        const countriesList = countries.map(country => {
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags[1],
                continent: country.region,
                capital: country.capital ? country.capital[0] : 'capital no encontrada',
                subregion: country.subregion ?  country.subregion : 'subregion no encontrada',
                area: country.area,
                population: country.population,
            };
        })
        
        await Country.bulkCreate(countriesList);

        const results = await Country.findAll();

        return results;
}

const getCountriesByName = async (name) => {
    const countriesList = await Country.findAll({
        where: { name: { [Op.iLike]: `%${name}%`} },
        include: [ {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: { attributes: [] },
        }]
    });
    const filtered = countriesList.filter(country => {
        return country.name.common === name;
    })

    return [...filtered, ...countriesList];
}



module.exports = {
    getCountryById,
    getAllCountries,
    getCountriesByName
}