var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("sass", function () {
  gulp.src("./sass/**/*.scss") //入力元
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions", "ie >= 9", "Android >= 4","ios_saf >= 8"],
      cascade: false
    }))
    .pipe(gulp.dest("./css")); //出力先
});

gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
