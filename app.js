var PythonShell = require('python-shell');
var assert = require('assert');

exports.logback = function logback(data, route, type, dir) {
  // body...
  if (type !== 'GET' && type !== 'get' && type !== 'POST' && type !== 'post' && type !== 'PUT' && type !== 'put' && type !== 'DELETE' && type !== 'delete') {
    assert.fail('invalid', null, 'Invalid method - values are GET, POST, PUT or DELETE')
    process.exit(1)
  }
  if (type === 'POST' || 'post') {
    var options = {
      args: [type, route, data]
    };

    PythonShell.run(dir+'app.py', options, function (err, results) {
      if (err) throw err;
      // results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });
  }
}

//logback({lang: 'h'}, 'http://localhost:8080/oobe/set-lang', 'POST')
