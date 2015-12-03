'use strict';

var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');

gulp.task('build', function () {
    browserify({
        entries: './client/app/main.js',
        debug: true
    })
    .transform(babelify)
    // options are needed if ".babelrc" is absent
    /*
    .transform(babelify, {
        global: true,
        ignore: /\/node_modules\//
    })
    */
    .bundle()
    .on('error', function (err) {
        console.error('--- Error! ---', err.message);
    })
    .pipe(source('app.bundle.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function () {
    gulp.src('client/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function () {
    gulp.watch('client/**/*.js', ['build']);
    gulp.watch('client/*.html', ['copy']);
});

gulp.task('default', ['copy', 'build', 'watch']);