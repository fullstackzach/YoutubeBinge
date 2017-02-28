var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles',function () {
	gulp.src('src/css/style.css')
		.pipe(autoprefixer())
		.pipe(gulp.dest('src/css/prefixed'))
});

gulp.task('watch',function() {
	gulp.watch('src/css/style.css', ['styles']);
});