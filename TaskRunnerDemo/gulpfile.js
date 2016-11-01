var gulp = require("gulp");
var uglify = require("gulp-uglify");
var less = require('gulp-less');
var path = require('path');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');

gulp.task('less', function () {
    return gulp.src('./less/*.less')
      .pipe(less())
      .pipe(gulp.dest('./public/css'));
});

gulp.task("min:js", function () {
    gulp.src('./js/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./public/js'));
});

gulp.task("min:css", ['less'], function () {
    gulp.src('./public/css/*.css')
        .pipe(cleancss())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('./public/cssmin'));
});

gulp.task("default", ["min:js", "min:css"]);