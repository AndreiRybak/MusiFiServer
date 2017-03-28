const Schema = require('../db').Schema;
const uuidV4 = require('uuid/v4');

module.exports = new Schema({
    _id: { type: String, default: uuidV4 },
    trackName: { type: String },
    longitude: { type: String },
    latitude: { type: String }
}, { timestamps: { createdAt: 'created_at' } });