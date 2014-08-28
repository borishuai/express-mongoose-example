var mongoose = require('mongoose');
var config = require('../config/config');

exports.connect = function() {
  mongoose.connect(config.db);
};