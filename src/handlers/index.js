const models = require('../models');
const Location = models.Location;

module.exports = {
    createLocation: (req, res) => {
        Location.create({
            trackName: 'awesome track by screpker',
            longitude: '111',
            latitude: '111'
        }).then(location => console.log(location));
    },

    getLocation: (req, res) => {

    },

    updateLocation: (req, res) => {

    },

    deleteLocation: (req, res) => {

    },

    getLocations: (req, res) => {

    }
}
