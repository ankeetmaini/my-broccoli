// a plugin which concatenates the files
var concat = require('broccoli-concat');

var javascripts = concat('js', {
  inputFiles: ['**/*.js'],
  outputFile: '/assets/app.js'
});

module.exports = javascripts;
