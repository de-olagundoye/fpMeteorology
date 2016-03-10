var mongoose = require('mongoose');

var FpGirlSchema = new mongoose.Schema({
  name: String,
  style: String,
  tag_line: String,
  description: String
})

module.exports = mongoose.model('FpGirl', FpGirlSchema);