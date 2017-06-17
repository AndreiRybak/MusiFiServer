const models = require('../models');
const Location = models.Location;

module.exports = {
    createLocation: (req, res) => {

        const {name, artist, image, longitude, latitude} = req.body;

        Location.create({
           name,
           artist,
           image,
           longitude,
           latitude,
        }).then(location => res.send({
            id: location._id.toString()
        }));
    },

    getLocations: (req, res) => {
        Location.find({}).then((locations) => res.send(locations));
    }
}
