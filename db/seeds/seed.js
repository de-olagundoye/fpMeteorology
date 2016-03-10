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


var u1 = new User({"username": "lindseypengelly", "email": "lindsey@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile": "http://www.freepeople.com/profile/Lindseypengelly/"});
var u2 = new User({"username": "kaciecone", "email": "kaciecone@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile":"http://www.freepeople.com/profile/kaciecone/"});
var u3 = new User({"username": "katiepossage", "email": "katiepossage@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile": "http://www.freepeople.com/profile/katiepossage/"});
var u4 = new User({"username": "fpk8", "email": "fpk8@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile": "http://www.freepeople.com/profile/fpk8/"});
var u5 = new User({"username": "shleeeeeeeeee", "email": "shleeeeeeeeee@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile": "http://www.freepeople.com/profile/Shleeeeeeeeee/"})
var u6 = new User({"username": "kennedydstearns", "email": "kennedydstearns@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile": "http://www.freepeople.com/profile/kennedydstearns/"})
var u7 = new User({"username": "indiesunshine", "email": "indiesunshine@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile": "http://www.freepeople.com/profile/indiesunshine/"})
var u8 = new User({"username": "FPLivTaylor", "email": "FPLivTaylor@fpmeteor.com", "password_digest": "$2a$08$DSeog8LowcZzbDz3YhUR/OUd6WPGdEj4KqvTsOa0N/Z3ELYG9qJCO7", "fpme_profile": "http://www.freepeople.com/profile/FPLivTaylor/"})

u1.save();
u2.save();
u3.save();
u4.save();
u5.save();
u6.save();
u7.save();
u8.save();


var w1 = new Weather({"weather":"Freezing"})
var w2 = new Weather({"weather":"Cold"})
var w3 = new Weather({"weather":"Mild"})
var w4 = new Weather({"weather":"Warm"})
var w5 = new Weather({"weather":"Hot"})

w1.save();
w2.save();
w3.save();
w4.save();
w5.save();

var o1 = new Occasion({"occasion":"Work"});
var o2 = new Occasion({"occasion":"Special/Wedding"});
var o3 = new Occasion({"occasion": "Hang Out"});
var o4 = new Occasion({"occasion": "Date Night"});
var o5 = new Occasion({"occasion": "Festival"});

o1.save();
o2.save();
o3.save();
o4.save();
o5.save();

var g1 = new FpGirl({"name":"Lou", "img_src": "img/fp_girls/lou.jpg", "style":"Tomboy", "tag_line": "The Laid-Back Tomboy", "description": "Lou's carefree style reflects her laid-back, down to earth spirit. Exploring the world or hanging out with the guys, Lou's almost always in a pair of jeans and a worn-in tee."});
var g2 = new FpGirl({"name":"Candy", "img_src": "img/fp_girls/candy.jpg", "style":"Sweet & Lacey", "tag_line": "The Girly Girl", "description": "Candy has a lighthearted, ethereal approach to life. She is romantic, girly, and drawn to all things femme. Her philosophy is delicate, lovely, and lacey."});
var g3 = new FpGirl({"name": "Meadow", "img_src": "img/fp_girls/meadow.jpg", "style":"Bohemian", "tag_line": "The Bohemian Nature Girl", "description": "Meadow is a true free spirit. Intriguing and enchanting, the understated magic within her rarely goes unnoticed. This dreamer wanders the earth in bohemian looks that channel the beauty of past decades."});
var g4 = new FpGirl({"name": "Ginger", "img_src": "img/fp_girls/ginger.jpg", "style":"Sexy", "tag_line": "The Sexy Vixen", "description": "Naturally alluring and completely charming, Ginger has a magnetic effect wherever she goes. She's in her element at parties and intimate affairs, never turning down a wild night spent under the stars."});
var g5 = new FpGirl({"name": "Sandy", "img_src": "img/fp_girls/sandy.jpg", "style":"Beachy", "tag_line": "The Beach Babe", "description": "Sandy dreams of an eternal summer spent roaming the earth's most beautiful beaches. With salt water in her hair and sand between her toes, she gravitates toward effortless silhouettes that catch the sea breeze."});

g1.save();
g2.save();
g3.save();
g4.save();
g5.save();

var l1 = new Look({ "user": u1._id, "img_src": "img/looks/1.jpg", "weather": w3._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-197/", "fp_girl": g1._id});
var l2 = new Look({"user": u1._id, "img_src": "img/looks/2.jpg", "weather": w4._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-164/", "fp_girl": g2._id});
var l3 = new Look({"user": u1._id, "img_src": "img/looks/3.jpg", "weather":  w3._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-125/", "fp_girl": g3._id});
var l4 = new Look({"user": u1._id, "img_src": "img/looks/4.jpg", "weather": w5._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-37/", "fp_girl": g3._id});
var l5 = new Look({"user": u1._id, "img_src": "img/looks/5.jpg", "weather": w4._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-102/", "fp_girl": g2._id});
var l6 = new Look({"user": u2._id, "img_src": "img/looks/6.jpg", "weather": w2._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-165/", "fp_girl": g1._id});
var l7 = new Look({"user": u2._id, "img_src": "img/looks/7.jpg", "weather": w2._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-147/", "fp_girl": g1._id});
var l8 = new Look({"user": u2._id, "img_src": "img/looks/8.jpg", "weather": w3._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-116/", "fp_girl": g3._id});
var l9 = new Look({"user": u2._id, "img_src": "img/looks/9.jpg", "weather": w3._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-114/", "fp_girl": g1._id});
var l10 = new Look({"user": u2._id, "img_src": "img/looks/10.jpeg", "weather": w3._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/kaciecone/pics/style-pic-87/", "fp_girl": g4._id});

var l11 = new Look({"user": u3._id, "img_src": "img/looks/11.jpg", "weather": w2._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-216/", "fp_girl": g1._id});
var l12 = new Look({"user": u3._id, "img_src": "img/looks/12.jpg", "weather": w1._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-205/", "fp_girl": g1._id});
var l13 = new Look({"user": u3._id, "img_src": "img/looks/13.jpg", "weather": w1._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-186/", "fp_girl": g4._id});
var l14 = new Look({"user": u3._id, "img_src": "img/looks/14.jpg", "weather": w2._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-118/", "fp_girl": g4._id});
var l15 = new Look({"user": u3._id, "img_src": "img/looks/15.jpg", "weather": w3._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-104/", "fp_girl": g4._id});
var l16 = new Look({"user": u4._id, "img_src": "img/looks/16.jpg", "weather": w3._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/fpk8/pics/style-pic-141/", "fp_girl": g1._id});
var l17 = new Look({"user": u4._id, "img_src": "img/looks/17.jpg", "weather": w2._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/fpk8/pics/style-pic-100/", "fp_girl": g1._id});
var l18 = new Look({"user": u4._id, "img_src": "img/looks/18.jpg", "weather": w4._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/fpk8/pics/kactusflower-1/", "fp_girl": g1._id});
var l19 = new Look({"user": u5._id, "img_src": "img/looks/19.jpg", "weather": w4._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/Shleeeeeeeeee/pics/style-pic-4/", "fp_girl": g3._id});
var l20 = new Look({ "user": u1._id, "img_src": "img/looks/20.jpg", "weather": w1._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/Lindseypengelly/pics/style-pic-66/", "fp_girl": g3._id});

var l21 = new Look({"user": u3._id, "img_src": "img/looks/21.jpg", "weather": w2._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-106/", "fp_girl": g3._id});
var l22 = new Look({"user": u6._id, "img_src": "img/looks/22.jpg", "weather": w2._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/kennedydstearns/pics/style-pic-98/", "fp_girl": g1._id});
var l23 = new Look({"user": u6._id, "img_src": "img/looks/23.jpg", "weather": w1._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/kennedydstearns/pics/style-pic-126/", "fp_girl": g1._id});
var l24 = new Look({"user": u6._id, "img_src": "img/looks/24.jpg", "weather": w3._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/kennedydstearns/pics/style-pic-93/", "fp_girl": g3._id});
var l25 = new Look({"user": u6._id, "img_src": "img/looks/25.jpg", "weather": w4._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/kennedydstearns/pics/style-pic-71/", "fp_girl": g3._id});
var l26 = new Look({"user": u6._id, "img_src": "img/looks/26.jpg", "weather": w5._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/kennedydstearns/pics/style-pic-57/", "fp_girl": g3._id});
var l27 = new Look({"user": u6._id, "img_src": "img/looks/27.jpg", "weather": w4._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/kennedydstearns/pics/style-pic-29/", "fp_girl": g3._id});
var l28 = new Look({"user": u6._id, "img_src": "img/looks/28.jpeg", "weather": w2._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/kennedydstearns/pics/style-pic-26/", "fp_girl": g1._id});
var l29 = new Look({"user": u3._id, "img_src": "img/looks/29.jpg", "weather": w5._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-211/", "fp_girl": g5._id});
var l30 = new Look({"user": u3._id, "img_src": "img/looks/30.jpg", "weather": w4._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-211/", "fp_girl": g5._id});

var l31 = new Look({"user": u7._id, "img_src": "img/looks/31.jpg", "weather": w2._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-104/", "fp_girl": g2._id});
var l32 = new Look({"user": u7._id, "img_src": "img/looks/32.jpg", "weather": w2._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-105/", "fp_girl": g2._id});
var l33 = new Look({"user": u7._id, "img_src": "img/looks/33.jpg", "weather": w1._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-98/", "fp_girl": g2._id});
var l34 = new Look({"user": u7._id, "img_src": "img/looks/34.jpg", "weather": w2._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-95/", "fp_girl": g1._id});
var l35 = new Look({"user": u7._id, "img_src": "img/looks/35.jpg", "weather": w5._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/katiepossage/pics/style-pic-211/", "fp_girl": g1._id});
var l36 = new Look({"user": u7._id, "img_src": "img/looks/36.jpg", "weather": w3._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-76/", "fp_girl": g2._id});
var l37 = new Look({"user": u7._id, "img_src": "img/looks/37.jpg", "weather": w4._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-64/", "fp_girl": g2._id});
var l38 = new Look({"user": u7._id, "img_src": "img/looks/38.jpg", "weather": w5._id, "occasion": o4._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-54/", "fp_girl": g5._id});
var l39 = new Look({"user": u7._id, "img_src": "img/looks/39.jpg", "weather": w2._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-14/", "fp_girl": g5._id});
var l40 = new Look({"user": u7._id, "img_src": "img/looks/40.jpg", "weather": w4._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-41/", "fp_girl": g1._id});

var l41 = new Look({"user": u7._id, "img_src": "img/looks/41.jpg", "weather": w5._id, "occasion": o3._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-38/", "fp_girl": g5._id});
var l42 = new Look({"user": u7._id, "img_src": "img/looks/42.jpg", "weather": w5._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-24/", "fp_girl": g5._id});
var l43 = new Look({"user": u7._id, "img_src": "img/looks/43.jpg", "weather": w4._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic-11/", "fp_girl": g5._id});
var l44 = new Look({"user": u7._id, "img_src": "img/looks/44.jpg", "weather": w3._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/indiesunshine/pics/style-pic/", "fp_girl": g3._id});
var l45 = new Look({"user": u8._id, "img_src": "img/looks/45.jpg", "weather": w2._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-46/", "fp_girl": g4._id});
var l46 = new Look({"user": u8._id, "img_src": "img/looks/46.jpg", "weather": w1._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-37/", "fp_girl": g4._id});
var l47 = new Look({"user": u8._id, "img_src": "img/looks/47.jpg", "weather": w2._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-35/", "fp_girl": g4._id});
var l48 = new Look({"user": u8._id, "img_src": "img/looks/48.jpg", "weather": w3._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-33/", "fp_girl": g4._id});
var l49 = new Look({"user": u8._id, "img_src": "img/looks/49.jpg", "weather": w2._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-24/", "fp_girl": g4._id});
var l50 = new Look({"user": u8._id, "img_src": "img/looks/50.jpeg", "weather": w3._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-22/", "fp_girl": g4._id});

var l51 = new Look({"user": u8._id, "img_src": "img/looks/51.jpeg", "weather": w1._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-19/", "fp_girl": g4._id});
var l52 = new Look({"user": u8._id, "img_src": "img/looks/52.jpg", "weather": w1._id, "occasion": o5._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-15/", "fp_girl": g1._id});
var l53 = new Look({"user": u8._id, "img_src": "img/looks/53.jpg", "weather": w2._id, "occasion": o1._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-6/", "fp_girl": g4._id});
var l54 = new Look({"user": u8._id, "img_src": "img/looks/54.jpg", "weather": w3._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-7/", "fp_girl": g4._id});
var l55 = new Look({"user": u8._id, "img_src": "img/looks/55.jpg", "weather": w2._id, "occasion": o2._id, "fp_link": "http://www.freepeople.com/profile/FPLivTaylor/pics/style-pic-4/", "fp_girl": g4._id});

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
l16.save();
l17.save();
l18.save();
l19.save();
l20.save();

l21.save();
l22.save();
l23.save();
l24.save();
l25.save();
l26.save();
l27.save();
l28.save();
l29.save();
l30.save();

l31.save();
l32.save();
l33.save();
l34.save();
l35.save();
l36.save();
l37.save();
l38.save();
l39.save();
l40.save();

l41.save();
l42.save();
l43.save();
l44.save();
l45.save();
l46.save();
l47.save();
l48.save();
l49.save();
l50.save();

l51.save();
l52.save();
l53.save();
l54.save();
l55.save();

Look.find({})
    .populate("user")
    .populate("weather")
    .populate("occasion")
    .populate("fp_girl")
    .exec(function(error, looks) {
      console.log(JSON.stringify(looks.length, null, "\t"))
      })

User.find({})
    .populate("looks")
    .exec(function(error, user) {
      console.log(JSON.stringify(user.length, null, "\t"))
      })

// var Look = require("../models/looks.js");
// var lookData =  require("./looks.json");

// lookData.forEach(function(row){
//   var look = new Look(row)
//   look.save(function(err, result){   
//   });
// });