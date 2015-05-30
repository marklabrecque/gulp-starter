var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
  gulp.src('app/client/css/sass/styles.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('app/client/css/'));
});

// Watch task.
gulp.task('default', function() {
  gulp.watch('app/client/css/sass/*.scss', ['styles']);
});
