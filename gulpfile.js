var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");


gulp.task("babel", function () {
  return gulp.src("js/src/*.es2015.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("app.built.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("js"));
});

gulp.task('watch-babel', function () {
	var watcher = gulp.watch("js/src/*.es2015.js", ['babel']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});
});

gulp.task('default', ['babel']);
