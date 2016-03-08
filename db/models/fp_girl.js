var mongoose = require('mongoose');

var FpGirlSchema = new mongoose.Schema({
  name: String,
  style: String
})

module.exports = mongoose.model('FpGirl', FpGirlSchema);