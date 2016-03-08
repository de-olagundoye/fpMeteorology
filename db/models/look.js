var mongoose = require('mongoose');
var User = require('./user');
var Weather = require('./weather');
var Occasion = require('./occasion');
var fpGirl = require('./fp_girl');

var Schema = mongoose.Schema;
var LookSchema = new Schema({
  user: {type: Schema.Types.ObjectId, ref: 'User'},
  img_src: String,
  weather: {type: Schema.Types.ObjectId, ref: 'Weather'},
  occasion: {type: Schema.Types.ObjectId, ref: 'Occasion'},
  fp_link: String,
  fp_girl: {type: Schema.Types.ObjectId, ref: 'FpGirl'}
})

module.exports = mongoose.model('Look', LookSchema);