var gulp = require('gulp'),
	concat = require('gulp-concat'),
	eslint = require('gulp-eslint'),
	ngAnnotate = require('gulp-ng-annotate'),
	karma = require('karma'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('karma', function(done){
	karma.config.parseConfig(
		__dirname + '/karma.conf.js',
		{ singleRun: true },
		{ promiseConfig: true, throwErrors: true }
	).then(function(karmaConfig) {
		var server = new karma.Server(karmaConfig, function(exitCode) {
			if (exitCode !== 0) {
				done(new Error('Karma exited with code ' + exitCode));
			} else {
				done();
			}
		});
		server.start();
	}).catch(function(err) {
		done(err);
	});
});

gulp.task('eslint', function() {
	return gulp.src([
		'js/main.js',
		'js/components/**/*.js',
		'js/models/**/*.js',
		'js/services/**/*.js',
		'js/filters/**/*.js',
		'js/vcard/vcard.js'
	])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
});


gulp.task('default', gulp.series('eslint', function() {
	return gulp.src([
		'js/main.js',
		'js/components/**/*.js',
		'js/models/**/*.js',
		'js/services/**/*.js',
		'js/filters/**/*.js',
		'js/vcard/vcard.js'
	])
		// concat (+sourcemaps)
		.pipe(sourcemaps.init())
		.pipe(ngAnnotate({ single_quotes: true }))
		.pipe(concat('script.js'))
		.pipe(sourcemaps.write())

		.pipe(gulp.dest('js/public'));
}));

gulp.task('watch', gulp.series('default', function() {
	gulp.watch(['js/**/*.js', '!js/public/**/*.js'], gulp.series('default'));
}));
