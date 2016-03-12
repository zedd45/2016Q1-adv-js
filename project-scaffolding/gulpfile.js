const gulp = require('gulp');
const jasmineBrowser = require('gulp-jasmine-browser');
const webpack = require('webpack-stream');

gulp.task('jasmine', function() {
    const JasminePlugin = require('gulp-jasmine-browser/webpack/jasmine-plugin');
    const plugin = new JasminePlugin();

    return gulp.src(['spec/**/*.spec.js'])
        .pipe(webpack({watch: true, output: {filename: 'spec.js'}, plugins: [plugin]}))
        .pipe(jasmineBrowser.specRunner())
        .pipe(jasmineBrowser.server({whenReady: plugin.whenReady}));
});

// alias it as the default
gulp.task('default', ['jasmine']);
