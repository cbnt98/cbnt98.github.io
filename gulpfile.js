const gulp = require("gulp");
const pug = require("gulp-pug");

var notify       = require("gulp-notify");
var plumber      = require("gulp-plumber");
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var browserSync  = require("browser-sync");

function compilePug() {
　 // コンパイル前のファイルのパス
  return gulp.src("./src/**/*.pug", "!./src/**/_*.pug")
  // コンパイルの処理を書く
  .pipe(pug({
    pretty: true
  }))
  // コンパイル後のファイルのパス
  .pipe(gulp.dest("./public"))
} 

exports.compilePug = compilePug;

const htmlbeautify = require("gulp-html-beautify")

gulp.task('pug', function () {
  return gulp
    .src([SRC + '**/*.pug', '!' + SRC + '**/_*.pug'])
    .pipe(pug())
    .pipe(htmlbeautify({
      "indent_size": 2,
      "indent_char": " ",
      "max_preserve_newlines": 0,
      "preserve_newlines": false,
      "extra_liners": [],
    }))
    .pipe(gulp.dest(DIST));
});

//Sass
var sassOptions = {
  outputStyle: 'compressed'//圧縮設定 nested, expanded, compact, compressed
}
gulp.task('sass', function () {
  gulp.src('./src/scss/' + '**/*.scss')
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sass(sassOptions))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/assets/CSS'))
});
//JS圧縮
gulp.task('js', function () {
  gulp.src('./src/js' + '**/*.js')
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest('./public/assets/JS'));
});
//BrowserSync
gulp.task('browser-sync', () => {
  browserSync({
    server: {
      baseDir: './public/'
    }
  });
  gulp.watch('./public/' + "**/*.html", ['reload']);
  gulp.watch('./public/assets/CSS' + "**/*.css", ['reload']);
  gulp.watch('./public/assets/JS' + "**/*.js", ['reload']);
});
gulp.task('reload', () => {
  browserSync.reload();
});

//watch
gulp.task('watch', function () {
  gulp.watch('./src/scss/' + '**/*.scss', ['scss']);
  gulp.watch('./src/js' + '**/*.js', ['js']);
});

gulp.task('default', ['browser-sync', 'watch']);

