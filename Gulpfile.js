/* jshint camelcase:false */
var gulp = require('gulp');
var server = require('gulp-express');

gulp.task('serve', function(cb) {
    server.run(['server.js']);
});
