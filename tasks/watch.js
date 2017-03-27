import gulp from 'gulp'

gulp.task('watch', () => {
  gulp.watch('./src/**/*.html', ['build:html'])
  gulp.watch('./src/**/*.scss', ['styles'])
  gulp.watch('./src/videos/**/*.*', ['images'])
  gulp.watch([
    './src/main.js',
    './src/app.jsx',
    './src/components/**/*.jsx',
    './src/js/lib/*.js'
  ], ['scripts'])
})
