const mongoose = require('mongoose');
const config = require('../config');

const host = config.get('db:host');
const port = config.get('db:port');
const dbname = config.get('db:database');
const user = config.get('db:user');
const password = config.get('db:password');
const prod = config.get('prod');

mongoose.connect(`mongodb://${prod ? `${user}:${password}@` : ''}${host}:${port}/${dbname}`);

module.exports = mongoose;
