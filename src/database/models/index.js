const dbConfig = require('../config');

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.events = require('./eventsModel')(mongoose)
db.users = require('./usersModel')(mongoose)
db.conversations = require('./conversationsModel')(mongoose)
db.messages = require('./messagesModel')(mongoose)

module.exports = db;