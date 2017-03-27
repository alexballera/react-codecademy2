import gulp from 'gulp'

gulp.task('apply-prod-environment', () => {
  process.env.NODE_ENV = 'production'
})
