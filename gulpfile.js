var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require("browser-sync").create();

gulp.task("sass", function () {
  gulp.src("./sass/**/*.scss") //入力元
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      browsers: ["last 2 versions", "ie >= 9", "Android >= 4","ios_saf >= 8"],
      cascade: false
    }))
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream()); //出力先
});

gulp.task('browser-sync', function(cb) {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  cb()
});

gulp.task('browser-sync:reload', function() {
  browserSync.reload()
});

gulp.task('watch', function (cb) {
  gulp.watch('./sass/**/*.scss', ['sass']);
  gulp.watch('./**/*.html', ['browser-sync:reload']);
  cb()
});

gulp.task('start', ["watch",  "browser-sync"]);
