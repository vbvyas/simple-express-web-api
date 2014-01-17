var express = require('express');

var app = express();

app.get('/test', function(req, res) {
  var query = req.query; // Do something with query
  var jsonFile = require('./test.json');
  res.json(jsonFile);
});

app.get('/test/:id', function(req, res) {
  var data = require('./test.json');
  var id = req.params.id;
  if (id < 1) res.json({});
  else res.json(data[id - 1]);
})

app.listen(3000);
