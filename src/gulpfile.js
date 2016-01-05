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
  var bundler = browserify('./js/app.js', { debug: true }).transform(babelify);

  function bundle() {
    console.log('~> Compiling JS');

    bundler.bundle()
      .on('error', function(err) { console.error(err); this.emit('end'); })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(header(banner, { pkg: pkg }))
      .pipe(gulp.dest('./contents/js'));
  }

  if (watch) {
    bundler = watchify(bundler);

    bundler.on('update', bundle);
  }

  bundle();
}


// Tasks
gulp.task('serve', ['sass', 'lint'], function() {
  browserSync.init({
    proxy: 'http://localhost:8991'
  });

  compileJS(true);

  gulp.watch(['scss/**/*.scss'], ['sass']);
  gulp.watch(['js/**/*.js'], ['lint']);
  gulp.watch(['contents/js/**/*.js'], browserSync.reload);

  // To account for Wintersmith picking up the changes :/
  gulp.watch(['**/*.html'], function() {
    setTimeout(function(){
      browserSync.reload();
    }, 500);
  });
});

gulp.task('sass', function(done) {
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

gulp.task('js', function() {
  compileJS();
});

gulp.task('lint', function() {
  console.log('~> Linting JS');

  return gulp.src(['js/**/*.js'])
    // eslint() attaches the lint output to the eslint property
    // of the file object so it can be used by other modules.
    .pipe(eslint())
    // eslint.format() outputs the lint results to the console.
    // Alternatively use eslint.formatEach() (see Docs).
    .pipe(eslint.format());
    // To have the process exit with an error code (1) on
    // lint error, return the stream and pipe to failOnError last.
    // .pipe(eslint.failOnError());
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
