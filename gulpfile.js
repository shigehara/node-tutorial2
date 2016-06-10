var gulp = require("gulp");
var sass = require("gulp-sass");

gulp.task("sass", function () {
  gulp.src("./sass/**/*.scss") //入力元
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css")); //出力先
});
