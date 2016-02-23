import gulp from 'gulp';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import autoprefixer from 'gulp-autoprefixer';
import csslint from 'gulp-csslint';

gulp.task('sass', () => {
	gulp.src('./sass/**/*.scss')
	.pipe(plumber())
	.pipe(sass({outputStyle: 'expanded'}))
	.pipe(autoprefixer())
	.pipe(csslint())
	.pipe(gulp.dest('./css'))
	.pipe(csslint.reporter());
});

gulp.task('watch', () => {
	gulp.watch('./sass/**/*.scss', ['sass']);
});
