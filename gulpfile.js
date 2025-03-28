const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("src/styles/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("dist/styles"));
}

exports.watch = function () {
  gulp.watch("src/styles/*.scss", compileSass);
};

exports.compileSass = compileSass;
