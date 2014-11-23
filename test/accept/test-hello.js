//acceptance tests
var request = require("request");
var util = require('util');
var assert = require('assert');

var baseUrl = "http://127.0.0.1:8052/hello/";

/*
 * A very simple acceptance test. This test requires the server to be running (this is setup via the 'grunt accept' task)
 */
exports.it_should_test_hello_in_server_GET = function(finish){
  request(baseUrl, function(err, response, body){
    assert.ok(!err, 'Unexpected error: ', util.inspect(err));
    assert.equal(response.statusCode, 200, 'Unexpected statusCode: ', response.statusCode + ' - ' + util.inspect(body));
    assert.equal(body, 'Hello World!');
    finish();
  });
};

