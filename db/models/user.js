var mongoose = require('mongoose');
var Look = require('./look');
var bcrypt = require('bcrypt');

var Schema = mongoose.Schema;
var UserSchema = new Schema({
  username: String,
  email: String,
  password_digest: String,
  fpme_profile: String,
  looks: [{ type: Schema.Types.ObjectId, ref: 'Look'}]
})


UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


var User = mongoose.model('User', UserSchema);
module.exports = User;