const gulp = require('gulp');
const stylus = require('gulp-stylus');
const concat = require('gulp-concat');

gulp.task('css', function () {
    return gulp.src('./src/css/*.styl')
        .pipe(stylus())
        .pipe(concat("styles.css"))
        .pipe(gulp.dest('./static/css/'));
});

gulp.task('js', function () {
    return gulp.src('./src/js/*.js')
        .pipe(concat("main.js"))
        .pipe(gulp.dest('./static/js/'));
});


// gulp.task('watch', function () {
//     gulp.parallel(gulp.watch(['./src/css/*.styl'], ['css']),
//     gulp.watch(['./src/css/*.js'], ['js']));
// });


gulp.task("default", gulp.series(['css', 'js']));