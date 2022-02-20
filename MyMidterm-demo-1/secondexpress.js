// Activity Name: second express.js
// Author Name: Alexandra c. Serrano
// Section and Code: WD-202/2083

var express = require('express'); 
var app = express();

app.get('/', function (req, res) {
  res.send( 'You have successfully created your second app!- Alex');
});

app.get("*", function (req, res) {
  res.send("ERROR 404 Not Found");
});

var server = app.listen (200, function () {
  var host = server.address().address 
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)
});