var PythonShell = require('python-shell');

exports.logback = function logback(data) {
  // body...
  var options = {
    scriptPath: 'src/send.py',
    args: ['value1', 'value2', 'value3']
  };

  PythonShell.run('my_script.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });
}
