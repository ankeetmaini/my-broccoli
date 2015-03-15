// a plugin which concatenates the files
var concat = require('broccoli-concat');
var mergeTrees = require('broccoli-merge-trees');

// concatenating all JS files
var javascripts = concat('js', {
  inputFiles: ['**/*.js'],
  outputFile: '/assets/app.js'
});

// concatenating all CSS files
var css = concat('styles', {
  inputFiles: ['**/*.css'],
  outputFile: '/assets/app.css'
});

// exporting both JS tree and css as well
module.exports = mergeTrees([javascripts, css, 'public']);
