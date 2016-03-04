var Look = require('../models/looks.js');
var lookData =  require('./looks.json');

lookData.forEach(function(row){
  var look = new Look(row)
  look.save(function(err, result){   
  });
});