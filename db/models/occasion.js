var mongoose = require('mongoose');

var OccasionSchema = new mongoose.Schema({
  occasion: String
})

module.exports = mongoose.model('Occasion', OccasionSchema);