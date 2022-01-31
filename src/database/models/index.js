const dbConfig = require('../config');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.events = require('./eventsModel')(mongoose)
db.users = require('./usersModel')(mongoose)

module.exports = db;

