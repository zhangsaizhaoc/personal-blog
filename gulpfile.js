var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefix', function(){
	gulp.src('./src/**/*.css')
		.pipe(autoprefixer({
			browsers: ['last 10 versions']
		}))
		.pipe(gulp.dest('./src'));
});