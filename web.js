//things and stuff
var express = require('express');
var logfmt = require("logfmt");
var fs = require('fs');

var app = express.createServer(express.logger());
app.use(express.static(process.env.PWD));
app.use(logfmt.requestLogger());


//use '/' not '*' or node will return the index page for all requests, even to libs and stylesheets
//app.get('*', function(request, response) {
app.get('/', function(request, response) {
    fs.createReadStream('./index.html').pipe(response);
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});