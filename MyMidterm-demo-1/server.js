// Activity Name: server.js - ROUTING
// Author Name: Alexandra c. Serrano
// Section and Code: WD-202/2083

var express = require("express");
var app = express();

app.get("/", function (req, res) {
  console.log("There is GET req for the homepage!");
  res.send("Here is the GET Method");
});

app.post("/", function (req, res) {
  console.log("A POST req for the homepage is accessed.");
  res.send("Here is the POST Method");
});

app.get("/list_user", function (req, res) {
  console.log("Got a GET req for /list_user");
  res.send("This is Page Listing");
});

app.get("/ab*cd", function (req, res) {
  console.log("Got A GET req for /ab*cd");
  res.send("Pattern Match Page");
});


var server = app.listen(300, "localhost", function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("Example app listening at http://%s:%s", host, port);
});