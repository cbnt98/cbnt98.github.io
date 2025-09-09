const gulp = require("gulp");
const pug = require("gulp-pug");

const notify = require('gulp-notify');  // エラー通知
const plumber = require('gulp-plumber'); // エラー時のタスク停止防止
const debug = require('gulp-debug'); // ログ表示
const filter = require('gulp-filter'); // ファイルフィルター

const htmlbeautify = require('gulp-html-beautify'); // HTML整形

const paths = {
  pug: {
    src: 'src/pug/**/*.pug', // コンパイル対象
    dest: 'public/' // 出力先
  }
}

/**
 * pugタスク
 */
function pugCompile() {
  return gulp.src(paths.pug.src)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(filter(function (file) { // _から始まるファイルを除外
      return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))
    .pipe(pug())
    .pipe(htmlbeautify({
      eol: '\n',
      indent_size: 2,
      indent_char: ' ',
      indent_with_tabs: false,
      end_with_newline: true,
      preserve_newlines: true,
      max_preserve_newlines: 2,
      indent_inner_html: true,
      brace_style: 'collapse',
      indent_scripts: 'normal',
      wrap_line_length: 0,
      wrap_attributes: 'auto'
    }))
    .pipe(gulp.dest(paths.pug.dest))
    .pipe(debug({title: 'pug dest:'}));
}

exports.pug = pugCompile; // pugタスク
exports.default = gulp.series(pugCompile); // defaultタスク


// function compilePug() {
// 　 // コンパイル前のファイルのパス
//   return gulp.src("./src/**/*.pug", "!./src/**/_*.pug")
//   // コンパイルの処理を書く
//   .pipe(pug({
//     pretty: true
//   }))
//   // コンパイル後のファイルのパス
//   .pipe(gulp.dest("./dist"))
// } 

// exports.compilePug = compilePug;

// const htmlbeautify = require("gulp-html-beautify")

// gulp.task('pug', function () {
//   return gulp
//     .src([SRC + '**/*.pug', '!' + SRC + '**/_*.pug'])
//     .pipe(pug())
//     .pipe(htmlbeautify({
//       "indent_size": 2,
//       "indent_char": " ",
//       "max_preserve_newlines": 0,
//       "preserve_newlines": false,
//       "extra_liners": [],
//     }))
//     .pipe(gulp.dest(DIST));
// });


