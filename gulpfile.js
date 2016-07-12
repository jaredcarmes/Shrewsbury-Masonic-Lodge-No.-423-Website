var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyJS = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var minifyIMG = require('gulp-imagemin');

gulp.task('scripts', function() {
	gulp.src('src/js/*.js')
	// .pipe(concat('main.min.js'))
	.pipe(minifyJS())
	.pipe(gulp.dest('dist/js/'))
});

gulp.task('stylesheets', function() {
	gulp.src('src/css/*.css') 
	.pipe(concat('main.min.css'))
	.pipe(minifyCSS())	    
	.pipe(gulp.dest('dist/css/'))
});

gulp.task('markup', function() {
	gulp.src('src/*.html') 
	.pipe(minifyHTML())	    
	.pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
	gulp.src('src/img/*')	
		.pipe(minifyIMG())
		.pipe(gulp.dest('dist/img/'))
});

gulp.task('loading', function() {
	gulp.src('src/images/*')	
		.pipe(minifyIMG())
		.pipe(gulp.dest('dist/images/'))
});

// File moving tasks

gulp.task('copyfonts', function() {
   gulp.src('src/fonts/*')
   .pipe(gulp.dest('dist/fonts/'));
});

gulp.task('copyicons', function() {
   gulp.src('src/favicons/*')
   .pipe(gulp.dest('dist/favicons/'));
});

gulp.task('brothers', function() {
	gulp.src('src/img/brothers/*')
		.pipe(minifyIMG())
		.pipe(gulp.dest('dist/img/brothers/'))
});

gulp.task('lodges', function() {
	gulp.src('src/img/lodges/*')
		.pipe(minifyIMG())
		.pipe(gulp.dest('dist/img/lodges/'))
});

gulp.task('default', ['scripts', 'stylesheets', 'markup', 'images', 'loading', 'copyfonts', 'copyicons', 'brothers', 'lodges']);