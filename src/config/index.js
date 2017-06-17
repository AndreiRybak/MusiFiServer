const nconf = require('nconf');

nconf.argv()
    .env({
      separator: '_',
    })
    .file({
      file: 'src/config/default.json',
    });

module.exports = nconf;
