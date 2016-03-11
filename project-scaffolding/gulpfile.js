const Babel = require('gulp-babel');
const Gulp = require('gulp');
const GulpConcat = require('gulp-concat');
const Sourcemaps = require('gulp-sourcemaps');
const WrapCommonjs = require('gulp-wrap-commonjs');


Gulp.task('default', function () {

    // "Fat Arrow" created an implicit return

    Gulp.src('src/**/*.js')
        .pipe(Sourcemaps.init())
        .pipe(Babel({
            presets: ['es2015']
        }))
        .pipe(WrapCommonjs())
        .pipe(GulpConcat('build.js'))
        .pipe(Sourcemaps.write('.'))
        .pipe(Gulp.dest('dist'));
});
