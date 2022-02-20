// Activity Name: firstapp.js
// Author Name: Alexandra c. Serrano
// Section and Code: WD-202/2083

var express = require("Express");

var app = express();

app.get("/", function(request, response) {
  response.send("Hello Word! -Alex");
});

app.listen(400, function(){
  console.log('Server running at http://localhost:400');
});