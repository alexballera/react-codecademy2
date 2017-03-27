import gulp from 'gulp'
import browserSync from 'browser-sync'

gulp.watch([
  './src/**/*.html',
  './src/**/*.scss',
  './src/main.js',
  './src/app.jsx',
  './src/components/**/*.jsx',
  './src/js/lib/*.js'
]).on('change', browserSync.reload)
