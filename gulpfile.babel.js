import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';

gulp.task('sass', () => {
	gulp.src('./sass/**/*.scss')
	.pipe(plumber())
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(autoprefixer())
	.pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
	gulp.watch('./sass/**/*.scss', ['sass']);
});
