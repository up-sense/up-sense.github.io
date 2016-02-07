var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('css', function () {
    gulp.src('./src/css/*.styl')
        .pipe(stylus())
        .pipe(concat("styles.css"))
        .pipe(gulp.dest('./static/css/'));
});


gulp.task('watch', function () {
    gulp.watch(['./src/css/*.styl'], ['css']);
});

