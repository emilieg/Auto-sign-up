var express = require('express');
var request = require('request');
var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.get('/', function(req, res) {
  res.sendFile('index.html');

});

app.post('/', function(req,res) {
  res.send('posting');
  console.log('posting')
})
//using the request.post method 
request.post({url:'http://localhost:3000',
  form: {
    name: 'Emilie',
    email: 'emilie@gmail.com',
    password: 'summertime'
  }}, function(err, res, body){
    if(err) {
      console.log("there was an ERROR: ", err);
    } else {
      console.log(res.statusCode);
    }
  }
);




app.listen(3000);