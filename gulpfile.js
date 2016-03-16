var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('css', function () {
    gulp.src('./src/css/*.styl')
        .pipe(stylus())
        .pipe(concat("styles.css"))
        .pipe(gulp.dest('./static/css/'));
});

gulp.task('js', function () {
    gulp.src('./src/js/*.js')
        .pipe(concat("main.js"))
        .pipe(gulp.dest('./static/js/'));
});


gulp.task('watch', function () {
    gulp.watch(['./src/css/*.styl'], ['css']);
    gulp.watch(['./src/css/*.js'], ['js']);
});


gulp.task("default", ['css', 'js', 'watch']);