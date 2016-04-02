// app setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt');
var MongoStore = require('connect-mongo')(session);
var methodOverride = require('method-override');

// config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// database setup
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/myDb';
mongoose.connect(mongoUrl);

var fpGirls = require('./db/models/fp_girl');
var Looks = require('./db/models/look');
var Occasions = require('./db/models/occasion');
var Users = require('./db/models/user');
var Weather = require('./db/models/weather');

app.use(session({
  secret: process.env.DE_SECRET,
  store: new MongoStore({ url: mongoUrl }),
  resave: true,
  saveUninitialized: true
}));

var authenticateUser = function(username, password, callback) {
  Users.findOne({username: username}, function(err, data) {
    console.log(data)
    if (err) {throw err;}
    bcrypt.compare(password, data.password_digest, function(err, passwordsMatch) {
      if (passwordsMatch) {
        callback(data);
        console.log('authenticated');
      } else {
        callback(false);
        console.log('NOT authenticated');
      }
    });
  });
};

app.use(function(req, res, next) {
  // console.log(req.method, req.url, '\n body:', req.body, '\n session:', req.session);
  next();
});

// Routes
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/checklogin',function(req,res){
  if (req.session) {
    res.send(true);
  }
  else {
    res.send(false);
  }
});

app.get('/looks', function(req, res){
  Looks.find({})
    .populate('user')
    .populate('weather')
    .populate('occasion')
    .populate('fp_girl')
    .exec(function(error, looks) {
    res.json(looks);
  });
});

app.get('/weather', function(req, res){
  Weather.find({}, function(error, weather){
    res.json(weather)
  })
})

app.get('/occasions', function(req, res){
  Occasions.find({}, function(error, occasions){
    res.json(occasions)
  })
})

app.get('/fp_girls', function(req, res){
  fpGirls.find({}, function(error, fp_girls){
    res.json(fp_girls)
  })
})

app.get('/login', function(req, res){
  res.redirect('/')
})

app.post('/login', function(req, res) {
  authenticateUser(req.body.username, req.body.password, function(user) {
    if(user) {
      req.session.username = user.username;
      req.session.password = user.password_digest;
    }
    res.redirect('/');
  })
})

app.get('/logout', function(req, res) {
  req.session.username = null;
  req.session.password = null;
  req.session.id = null;
  console.log(req.session.username)
  res.redirect('/');
})

app.listen(process.env.PORT || 9292);