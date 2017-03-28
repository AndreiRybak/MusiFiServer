const db = require('../db');
const Location = require('./Location');

module.exports = {
    Location: db.model('Location', Location)
}