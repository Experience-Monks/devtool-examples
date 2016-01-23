// Include gulp
var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile Our Sass
gulp.task('sass', function () {
  debugger;
  return gulp.src('style/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('style'));
});

// Watch Files For Changes
gulp.task('watch', function () {
  gulp.watch('style/*.scss', ['sass']);
});

// Default Task
gulp.task('default', ['sass']);
