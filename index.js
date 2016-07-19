var express = require('express');
var request = require('request');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('index.html');

});


app.listen(3000);