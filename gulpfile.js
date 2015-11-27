var gulp = require("gulp");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");


gulp.task("babel", function () {
  return gulp.src("js/src/*.es2015.js")
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(concat("app.built.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("js"));
});

gulp.task("babel-jasmine", function () {
  return gulp.src("jasmine/spec/src/*.es2015.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("mainSpec.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("jasmine/spec"));
});

gulp.task('watch-babel', function () {
	var watcher = gulp.watch("js/src/*.es2015.js", ['babel']);
	watcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
	});

    var watcher2 = gulp.watch("jasmine/spec/src/*.es2015.js", ['babel-jasmine']);
    watcher2.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['babel', 'babel-jasmine']);
