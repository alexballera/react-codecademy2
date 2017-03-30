import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/**/*.scss',
  './src/**/*.jsx',
  './src/js/lib/*.js'
]).on('change', browserSync.reload)
