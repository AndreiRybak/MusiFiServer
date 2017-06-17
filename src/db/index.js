const mongoose = require('mongoose');
const config = require('../config');

const host = config.get('db:host');
const port = config.get('db:port');
const dbname = config.get('db:database');
const user = config.get('db:user');
const pass = config.get('db:password');
const prod = config.get('prod');

const creds = `${user}:${pass}@`;
mongoose.connect(`mongodb://${prod ? creds : ''}${host}:${port}/${dbname}?authSource=music`).then(
    () => console.log(`Connected to ${host}:${port}/${dbname} DB`),
    (err) => console.log(`Connected to DB failed, err: ${err}`)
)

module.exports = mongoose;
