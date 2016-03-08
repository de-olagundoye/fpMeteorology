var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/myDb';

mongoose.connect(mongoUrl, function(err) {
  if (err) {
    console.log('Connection Error', err);
  } else {
    console.log('Connection Successful');
  }
});

var User = require('../models/user.js');
var Weather = require('../models/weather.js');
var Occasion = require('../models/occasion.js');
var FpGirl = require('../models/fp_girl.js');
var Look = require('../models/look.js');

User.remove({}, function(err) {  
  if(err) {return done(err)}
});

Weather.remove({}, function(err) {  
  if(err) {return done(err)}
});

Occasion.remove({}, function(err) {  
  if(err) {return done(err)}
});

FpGirl.remove({}, function(err) {  
  if(err) {return done(err)}
});

Look.remove({}, function(err) {  
  if(err) {return done(err)}
});


var u1 = new User({'username': 'lindseypengelly', 'email': 'lindsey@fpmeteor.com', 'password_digest': '$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7', 'fpme_profile': 'http://www.freepeople.com/profile/Lindseypengelly/'});
var u2 = new User({'username': 'kaciecone', 'email': 'kaciecone@fpmeteor.com', 'password_digest': '$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7', 'fpme_profile':'http://www.freepeople.com/profile/kaciecone/'});
var u3 = new User({'username': 'katiepossage', 'email': 'katiepossage@fpmeteor.com', 'password_digest': '$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7', 'fpme_profile': 'http://www.freepeople.com/profile/katiepossage/'});

u1.save();
u2.save();
u3.save();


var w1 = new Weather({'weather':'Freezing'})
var w2 = new Weather({'weather':'Cold'})
var w3 = new Weather({'weather':'Mild'})
var w4 = new Weather({'weather':'Warm'})
var w5 = new Weather({'weather':'Hot'})

w1.save();
w2.save();
w3.save();
w4.save();
w5.save();

var o1 = new Occasion({'occasion':'Work'});
var o2 = new Occasion({'occasion':'Special/Wedding'});
var o3 = new Occasion({'occasion': 'Hang Out'});
var o4 = new Occasion({'occasion': 'Date Night'});

o1.save();
o2.save();
o3.save();
o4.save();

var g1 = new FpGirl({'name':'Lou', 'style':'Tomboy'});
var g2 = new FpGirl({'name':'Candy', 'style':'Sweet & Lacey'});
var g3 = new FpGirl({'name': 'Meadow', 'style':'Bohemian'});
var g4 = new FpGirl({'name': 'Ginger', 'style':'Sexy'});
var g5 = new FpGirl({'name': 'Sandy', 'style':'Beachy'});

g1.save();
g2.save();
g3.save();
g4.save();
g5.save();

var l1 = new Look({ 'user': u1._id, 'img_src': 'img/fp/1.jpg', 'weather': w3._id, 'occasion': o1._id, 'fp_link': 'http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-197/', 'fp_girl': g1._id});
var l2 = new Look({'user': u1._id, "img_src": "img/fp/2.jpg", "weather": w4._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-164/", "fp_girl": g2._id});
var l3 = new Look({'user': u1._id, "img_src": "img/fp/3.jpg", "weather":  w3._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-125/", "fp_girl": g3._id});
var l4 = new Look({'user': u1._id, "img_src": "img/fp/4.jpg", "weather": w5._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-37/", "fp_girl": g3._id});
var l5 = new Look({'user': u1._id, "img_src": "img/fp/5.jpg", "weather": w4._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-102/", "fp_girl": g2._id});
var l6 = new Look({'user': u2._id, "img_src": "img/fp/6.jpg", "weather": w2._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-165/", "fp_girl": g1._id});
var l7 = new Look({'user': u2._id, "img_src": "img/fp/7.jpg", "weather": w2._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-147/", "fp_girl": g1._id});
var l8 = new Look({'user': u2._id, "img_src": "img/fp/8.jpg", "weather": w3._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-116/", "fp_girl": g3._id});
var l9 = new Look({'user': u2._id, "img_src": "img/fp/9.jpg", "weather": w3._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-114/", "fp_girl": g1._id});
var l10 = new Look({'user': u2._id, "img_src": "img/fp/10.jpeg", "weather": w3._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-87/", "fp_girl": g4._id});
var l11 = new Look({'user': u3._id, "img_src": "img/fp/11.jpg", "weather": w2._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-216/", "fp_girl": g1._id});
var l12 = new Look({'user': u3._id, "img_src": "img/fp/12.jpg", "weather": w1._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-205/", "fp_girl": g1._id});
var l13 = new Look({'user': u3._id, "img_src": "img/fp/13.jpg", "weather": w1._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-186/", "fp_girl": g4._id});
var l14 = new Look({'user': u3._id, "img_src": "img/fp/14.jpg", "weather": w2._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-118/", "fp_girl": g4._id});
var l15 = new Look({'user': u3._id, "img_src": "img/fp/15.jpg", "weather": w3._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-104/", "fp_girl": g4._id});

l1.save();
l2.save();
l3.save();
l4.save();
l5.save();
l6.save();
l7.save();
l8.save();
l9.save();
l10.save();
l11.save();
l12.save();
l13.save();
l14.save();
l15.save();

Look.find({})
    .populate('user')
    .populate('weather')
    .populate('occasion')
    .populate('fp_girl')
    .exec(function(error, looks) {
      console.log(JSON.stringify(looks.length, null, "\t"))
      })

User.find({})
    .populate('looks')
    .exec(function(error, user) {
      console.log(JSON.stringify(user.length, null, "\t"))
      })

// var Look = require('../models/looks.js');
// var lookData =  require('./looks.json');

// lookData.forEach(function(row){
//   var look = new Look(row)
//   look.save(function(err, result){   
//   });
// });