var express = require('express')
var app = express()
var hello = require('./lib/hello-route.js');

// allow serving of static files from the public directory
app.use(express.static(__dirname + '/public'));

// 'hello' GET endpoint
app.get('/hello', hello.get);

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)
})