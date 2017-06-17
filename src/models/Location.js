const Schema = require('../db').Schema;

module.exports = new Schema({
    name: { type: String },
    artist: { type: String },
    image: { type: String },
    longitude: { type: String },
    latitude: { type: String }
}, { timestamps: true });