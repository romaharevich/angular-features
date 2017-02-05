'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');

const BUILD = {
    BASE: {
        DIR: 'build/',
        FILE: ''
    },
    CSS: {
        DIR: 'build/css',
        FILE: 'bundle.css'
    },
    JS: {
        DIR: 'build/js',
        FILE: 'bundle.js'
    },
    FONTS: {
        DIR: 'build/fonts'
    }
};

const THIRD_PARTY = {
    JS: [
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/angular/angular.min.js',
        'node_modules/angular-route/angular-route.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-route-segment/build/angular-route-segment.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js'
    ],
    CSS: [
        'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'node_modules/font-awesome/css/font-awesome.min.css'
    ],
    FONTS: [
        'node_modules/font-awesome/fonts/**'
    ]
};

const PROJECT = {
    JS:[
        'app/app.module.js',
        'app/**/*.js'
    ],
    CSS: [
        'css/custom.css'
    ]
};

// ----- FONTS -----
gulp.task('build.third.party.fonts', function() {
    return gulp.src(THIRD_PARTY.FONTS)
        .pipe(gulp.dest(BUILD.FONTS.DIR));
});

gulp.task('build.fonts', gulp.series(['build.third.party.fonts']));

// ----- CSS -----
gulp.task('build.project.css', function() {
    return gulp.src(PROJECT.CSS)
        .pipe(concat('app.css'))
        .pipe(gulp.dest(BUILD.CSS.DIR));
});

gulp.task('build.third.party.css', function() {
    return gulp.src(THIRD_PARTY.CSS)
        .pipe(concat(BUILD.CSS.FILE))
        .pipe(gulp.dest(BUILD.CSS.DIR))
});

gulp.task('build.css', gulp.parallel(['build.project.css', 'build.third.party.css']));

// ----- JS -----
gulp.task('build.project.js', function() {
    return gulp.src(PROJECT.JS)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(BUILD.JS.DIR));
});

gulp.task('build.third.party.js', function() {
   return gulp.src(THIRD_PARTY.JS)
       .pipe(concat(BUILD.JS.FILE))
       .pipe(gulp.dest(BUILD.JS.DIR));
});

gulp.task('build.js', gulp.parallel(['build.project.js', 'build.third.party.js']));


// ----- WATCHERS -----
gulp.task('watcher', function() {
    //TODO: Should work on file delete too.
    return gulp.watch(PROJECT.JS.concat(PROJECT.CSS), gulp.parallel(['build.project.js', 'build.project.css']));
});

// ----- TASKS -----
gulp.task('default', gulp.parallel(['build.js', 'build.css', 'build.fonts']));
gulp.task('watch', gulp.series(['default', 'watcher']));
