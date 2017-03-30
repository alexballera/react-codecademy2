import gulp from 'gulp'
require('require-dir')('./tasks')

// Build
gulp.task('build', ['copy', 'inject'], () => {
  gulp.start('build:html', 'styles', 'scripts', 'images')
})

// Default
gulp.task('default', ['clean'], () => {
  gulp.start('apply-prod-environment', 'build', 'serve', 'watch')
})
