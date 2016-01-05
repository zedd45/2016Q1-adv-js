'use strict';

const Gulp = require('gulp');
const Jshint = require('gulp-jshint');


Gulp.task('lint', () => {
    return Gulp.src('index.js')
        .pipe(Jshint())
        .pipe(Jshint.reporter('jshint-stylish'))
        .pipe(Jshint.reporter('fail'));
});
