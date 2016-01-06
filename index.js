'use strict';

var https = require('https');
var pkg = require('./package.json')

var getReadme = module.exports = function (repo, callback) {
  var options = {
    hostname: 'api.github.com',
    port: 443,
    path: '/repos/' + repo + '/readme',
    method: 'GET',
    headers: {
      'User-agent': pkg.name + '/' + pkg.version
    }
  };

  var req = https.request(options, function (res) {
    if (res.statusCode !== 200) {
      return callback(new Error('request failed'));
    }

    var body = '';

    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      try {
        var data = JSON.parse(body);

        if (!data.content) {
          return callback(new Error('No readme content'));
        }

        var readme = new Buffer(data.content, data.encoding).toString();
        callback(null, readme)

      } catch (ex) {
        callback(ex);
      }
    })
  });
  req.end();

  req.on('error', function (err) {
    callback(err);
  });
};
