var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCSS = require('gulp-minify-css');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var imageminOptipng = require('imagemin-optipng');
var pngquant = require('imagemin-pngquant');

//////////////////////////////////////////////////
// 本地模块
var makeHTML = require('./others/hbs/hbs.js')
//////////////////////////////////////////////////

gulp.task('makeHTML',()=>{
    makeHTML();
});

gulp.task('mini-html', () => {
    gulp.src('./*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('publish/'));
});

gulp.task('mini-css', () => {
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('publish/css/'));
});


gulp.task('mini-js', () => {
    gulp.src('js/*.js')
        .pipe(uglify())
        // .pipe(rename('jquery.min.js'))
        .pipe(gulp.dest('publish/js/'));

    gulp.src('js/**/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('publish/js/'));
});

gulp.task('mini-image', () => {
    gulp.src('others/*.{png,jpg}')
        .pipe(imagemin({
            optimizationLevel: 7, //优化等级0-7, 3默认
            progressive: true, //无损压缩jpg
            use: [pngquant()], //深度压缩png
        }))
        .pipe(gulp.dest('others/min'));
})

// gulp.task('watch', () => {
//     livereload.listen();
//     gulp.watch('index.html');
// });

gulp.task('default', ['mini-css', 'mini-html', 'mini-js']);