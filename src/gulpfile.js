// Imports
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var shell = require('gulp-shell');

var sass = require('gulp-sass');
var bourbon = require('node-bourbon');

var header = require('gulp-header');
var pkg = require('./package.json');


// Vars
var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version <%= pkg.version %>',
  ' * @link <%= pkg.homepage %>',
  ' * ',
  ' */',
  '',
  ''].join('\n');


// Tasks
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: 'http://localhost:8991'
  });

  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['**/*.html'], browserSync.reload);
});

gulp.task('sass', function() {
  console.log('~> Compiling Sass');

  return gulp.src('scss/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      errLogToConsole: true,
      includePaths: bourbon.includePaths
    }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./contents/css'))
    .pipe(browserSync.stream());
});

gulp.task('build', function() {
  console.log('~> Compiling Sass');

  return gulp.src('scss/app.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths: bourbon.includePaths
    }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('./contents/css'))
});

// Commands
gulp.task('default', ['serve']);
