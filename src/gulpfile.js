// Imports
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');

var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');

var eslint = require('gulp-eslint');

var sass = require('gulp-sass');
var bourbon = require('node-bourbon');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');

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


// Functions
function compileJS(watch) {
  var bundler = browserify('js/app.js', { debug: true }).transform(babelify);

  function bundle() {
    console.log('~> Compiling JS');

    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest('contents/js'));
  }

  if (watch) {
    bundler = watchify(bundler);

    bundler.on('update', bundle);
  }

  bundle();
}


// Tasks
gulp.task('serve', ['sass'], function() {
  browserSync.init({
    proxy: 'http://localhost:8991'
  });

  compileJS(true);
  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['**/*.html', 'contents/js/**/*.js'], browserSync.reload);
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

  gulp.src('scss/app.scss')
    .pipe(sass({
      errLogToConsole: true,
      includePaths: bourbon.includePaths
    }))
    .pipe(header(banner, { pkg: pkg }))
    .pipe(gulp.dest('./contents/css'));

  compileJS();
});

// Commands
gulp.task('default', ['serve']);
