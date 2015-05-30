var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('css/sass/styles.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./css/'));
});

// Watch task.
gulp.task('default', function() {
  gulp.watch('css/sass/*.scss', ['styles']);
});
