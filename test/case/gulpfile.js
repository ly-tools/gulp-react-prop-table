'use strict';
const gulp = require('gulp');
const plugin = require('../../index');
const del = require('del');

gulp.task('clean', cb => del('build', cb));

gulp.task('default', ['clean'], () => {
  return gulp.src('src/**/*.jsx')
    .pipe(plugin({}))
    .pipe(gulp.dest('build'));
});

module.exports = gulp;
