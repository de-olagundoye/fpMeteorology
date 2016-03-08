// app setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
var bcrypt = require('bcrypt');
var MongoStore = require('connect-mongo')(session);
var methodOverride = require('method-override');

// middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method'));

// database setup
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/myDb';
mongoose.connect(mongoUrl);

var Looks = require('./db/models/looks');

app.use(session({
  secret: process.env.DE_SECRET,
  store: new MongoStore({ url: mongoUrl }),
  resave: true,
  saveUninitialized: true
}));




var authenticateUser = function(email, password, callback) {
  Admin.findOne({email: email}, function(err, data) {
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

app.get('/looks.json', function(req, res){
  Looks.find({}, function(err, results){
    console.log(results);
    res.json(results);
  });
});

app.listen(process.env.PORT || 9292);