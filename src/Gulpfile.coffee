# Load required libraries
gulp       = require 'gulp'
gutil      = require 'gulp-util'
coffee     = require 'gulp-coffee'
concat     = require 'gulp-concat'
header     = require 'gulp-header'
livereload = require 'gulp-livereload'
sourcemaps = require 'gulp-sourcemaps'
stylus     = require 'gulp-stylus'
uglify     = require 'gulp-uglify'
nib        = require 'nib'
pkg        = require './package.json'

banner = """
  /**
   * <%= pkg.name %> - <%= pkg.description %>
   * @version v<%= pkg.version %>
   * @link <%= pkg.homepage %>
   */

"""

# Gulp tasks
gulp.task 'stylus', ->
  gulp.src './stylus/main.styl'
    .pipe stylus
      use: [nib()]
      sourcemap: { inline: true }
    .pipe gulp.dest('./contents/styles')
    .pipe livereload(35777)

gulp.task 'coffee', ->
  gulp.src './coffee/**/*.coffee'
    .pipe sourcemaps.init()
    .pipe coffee({ bare: false }).on('error', gutil.log)
    .pipe sourcemaps.write()
    .pipe concat('main.js')
    .pipe gulp.dest('./contents/scripts')
    .pipe livereload(35777)

gulp.task 'livereload', ->
  gulp.src ['./templates/**/*.html', './contents/**/*.md', './contents/**/*.json']
    .pipe livereload(35777)

gulp.task 'package', ->
  gulp.src './coffee/**/*.coffee'
    .pipe coffee({ bare: false }).on('error', gutil.log)
    .pipe concat('main.js')
    .pipe uglify()
    .pipe header(banner, { pkg: pkg })
    .pipe gulp.dest('./contents/scripts')
  gulp.src './stylus/main.styl'
    .pipe stylus
      use: [nib()]
      compress: true
    .pipe header(banner, { pkg: pkg })
    .pipe gulp.dest('./contents/styles')


# Default tasks
gulp.task 'default', ['coffee', 'stylus'], ->
  livereload(35777)
  gulp.watch './coffee/**/*.coffee', ['coffee']
  gulp.watch './stylus/**/*.styl', ['stylus']
  gulp.watch ['./templates/**/*.html', './contents/**/*.md', './contents/**.*.json'], ['livereload']