var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema
var lookSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  fpme_profile: String,
  looks: Array
})

var Looks = mongoose.model('Looks', lookSchema);

lookSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

lookSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

module.exports = Looks;