var mongoose = require('mongoose');

var WeatherSchema = new mongoose.Schema({
  weather: String
})

module.exports = mongoose.model('Weather', WeatherSchema);