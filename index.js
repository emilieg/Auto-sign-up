var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var session = require('express-session');
var db = require('./models');


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(ejsLayouts);
app.use(session({
  secret: 'test',
  resave: false,
  saveUninitialized: true
}));


app.get('/', function(req, res) {
  res.sendFile('index.html');

});

app.post('/', function(req,res) {
  db.user.findOrCreate({
    where: {
    name: req.body.name
  },
    defaults: {
      email: req.body.email,
      password: req.body.password
    }
  }).spread(function(user, created) {
    console.log("created");
  }).catch(function(err) {
    res.send(err)
  });
  // res.send('posting');
  // console.log(req.body);
});
//using the request.post method 
request.post({url:'http://localhost:3000',
  form: {
    name: 'Emilie',
    email: 'emilie@gmail.com',
    password: 'summertime',
  }}, function(err, res, body){
    if(err) {
      console.log("there was an ERROR: ", err);
    } else {
      console.log(res.statusCode);
    }
  }
);




app.listen(3000);