const dbConfig = require('../config');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.events = require('./eventsModel')(mongoose)

module.exports = db;

