var express = require('express');
var app = express();

var hello = require('lib/hello-route.js');

// 'hello' GET endpoint
app.get('/hello', hello.get);
var server;

exports.setUp = function(finish){
  var port = 8052;
  server = app.listen(port, function(){
    console.log("App started at: " + new Date() + " on port: " + port);
    finish();
  });
};

exports.tearDown = function(finish) {
  if (server) {
    server.close(function() {
      finish();
    });
  }
};
