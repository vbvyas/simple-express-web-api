var express = require('express');

var app = express();

app.get('/', function(req, res) {
  var jsonFile = require('./test.json');
  res.json(jsonFile);
});

app.listen(3000);
