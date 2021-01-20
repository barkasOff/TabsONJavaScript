'use strict';

const   gulp = require('gulp'),
        browserSync = require('browser-sync'),
        sass = require('gulp-sass'),
        cleanCSS = require('gulp-clean-css'),
        autoprefixer = require('gulp-autoprefixer'),
        rename = require('gulp-rename'),
        webpackStream = require('webpack-stream'),
        webpackConfig = require('./webpack.config.js');


gulp.task('server', () => {
    browserSync.init({
        server: {
            baseDir: 'src'
        }
    });    
    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', () => {
    return (gulp.src('src/sass/**/*.+(scss|sass)'))
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(rename({suffix: '.min', prefix: ''}))
            .pipe(autoprefixer())
            .pipe(cleanCSS({compatibility: 'ie8'}))
            .pipe(gulp.dest('src/css'))
            .pipe(browserSync.stream());
});

gulp.task('watch', () => {
    gulp.watch("src/js/script.js", gulp.parallel('wpack'));
    gulp.watch("src/sass/**/*.+(scss|sass)", gulp.parallel('styles'));
});

gulp.task('wpack', () => {
    gulp.src('./src/js/script.js')
        .pipe(webpackStream(webpackConfig))
        .pipe(gulp.dest('./src/js/'))
        .pipe(browserSync.stream());
});

gulp.task('default', gulp.parallel('watch', 'server', 'wpack','styles'));