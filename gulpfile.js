var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

gulp.task('mini-index', () => {
    gulp.src('index.html')
        .pipe(minifyHtml())
        .pipe(rename('index.min.html'))
        .pipe(gulp.dest('.'));
});

gulp.task('mini-js', () => {
    gulp.src('js/jquery.js')
        .pipe(uglify())
        .pipe(rename('jquery.min.js'))
        .pipe(gulp.dest('js'));
});


gulp.task('watch', () => {
    livereload.listen();
    gulp.watch('index.html');
});