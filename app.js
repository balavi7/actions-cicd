var express = require('express');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World! Automating through Github Actions, Also deleting old containers and pull and runnning the latest container');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
