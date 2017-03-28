const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:32770/music');

module.exports = mongoose;
