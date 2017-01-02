var gulp = require('gulp');
var concat = require('gulp-concat');

var BUILD_DIR = 'build/';
var NODE_MODULES = [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-route/angular-route.min.js',
    'node_modules/angular-animate/angular-animate.min.js',
    'node_modules/angular-route-segment/build/angular-route-segment.min.js'
];

var projectFiles = [
    'app/app.module.js',
    'app/**/*.js'
];

gulp.task('build.js', function() {
    return gulp.src(projectFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build.node.modules', function() {
   return gulp.src(NODE_MODULES)
       .pipe(concat('bundle.js'))
       .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build', gulp.parallel(['build.js', 'build.node.modules']));

gulp.task('watcher', function() {
    //TODO: Should work on file delete too.
    return gulp.watch(projectFiles, gulp.series(['build.js']));
});

gulp.task('default', gulp.series(['build']));
gulp.task('watch', gulp.series(['build', 'watcher']));
