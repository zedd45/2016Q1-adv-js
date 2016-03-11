const Babel = require('gulp-babel');
const Gulp = require('gulp');
const GulpConcat = require('gulp-concat');
const Sourcemaps = require('gulp-sourcemaps');


Gulp.task('default', () => {

    // "Fat Arrow" created an implicit return

    Gulp.src('./index.js')
        .pipe(Sourcemaps.init())
        .pipe(Babel({
            presets: ['es2015']
        }))
        .pipe(GulpConcat('build.js'))
        .pipe(Sourcemaps.write('.'))
        .pipe(Gulp.dest('dist'));
});
