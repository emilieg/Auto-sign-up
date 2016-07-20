var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(ejsLayouts);


app.get('/', function(req, res) {
  res.sendFile('index.html');

});

app.post('/', function(req,res) {
  res.send('posting');
  console.log(req.body);
})
//using the request.post method 
request.post({url:'http://localhost:3000',
  form: {
    name: ['Emilie','Kathy', 'Tonya'],
    email: ['emilie@gmail.com','kathy@email.com', 'tonya@gmail.com'],
    password: ['summertime', 'lazy', 'teapot']
  }}, function(err, res, body){
    if(err) {
      console.log("there was an ERROR: ", err);
    } else {
      console.log(res.statusCode);
    }
  }
);




app.listen(3000);