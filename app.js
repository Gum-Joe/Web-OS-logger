var PythonShell = require('python-shell');
var assert = require('assert');

logback = function logback(data, route, type) {
  // body...
  if (type !== 'GET' && type !== 'get' && type !== 'POST' && type !== 'post' && type !== 'PUT' && type !== 'put' && type !== 'DELETE' && type !== 'delete') {
    assert.fail('invalid', null, 'Invalid method - values are GET, POST, PUT or DELETE')
    process.exit(1)
  }
  if (type === 'POST' || 'post') {
    var options = {
      args: [route, data]
    };

    PythonShell.run('src/post.py', options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });
  }
}

logback({name: 'h'}, 'http://localhost:8080/api/data', 'POST')
