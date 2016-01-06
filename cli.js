#!/usr/bin/env node

var getReadme = require('./index');

var args = process.argv.splice(2);
var repo = args[0];

getReadme(repo, function (err, readme) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  process.stdout.write(readme);
});
