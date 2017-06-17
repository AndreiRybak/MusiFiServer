const mongoose = require('mongoose');
const config = require('../config');

const host = config.get('db:host');
const port = config.get('db:port');
const dbname = config.get('db:database');

mongoose.connect(`mongodb://${host}:${port}/${dbname}`);

module.exports = mongoose;
