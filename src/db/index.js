const mongoose = require('mongoose');
const config = require('../config');

const host = config.get('db:host');
const port = config.get('db:port');
const dbname = config.get('db:database');
const user = config.get('db:user');
const pass = config.get('db:password');
const prod = config.get('prod');

const opt = {
    user,
    pass,
}
mongoose.connect(`mongodb://${host}:${port}/${dbname}?authSource=admin`, prod ? opt : {});

module.exports = mongoose;
