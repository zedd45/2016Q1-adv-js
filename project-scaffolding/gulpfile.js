const Gulp = require('gulp');
const Babel = require('gulp-babel');

Gulp.task('default', () => {

    // "Fat Arrow" created an implicit return

    Gulp.src('./index.js')
        .pipe(Babel({
            presets: ['es2015']
        }))
        .pipe(Gulp.dest('dist'));
});
