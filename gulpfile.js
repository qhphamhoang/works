const gulp = require("gulp");
const argv = require("yargs").argv;
let gutil = require('gulp-util');
const browserSync = require('browser-sync').create();

let logger = {
  write: function (decorator, msg) {
    gutil.log(decorator(msg));
  },
  error: function (msg) {
    this.write(gutil.colors.red.bold, msg);
  },
  warn: function (msg) {
    this.write(gutil.colors.yellow.bold, msg);
  },
  success: function (msg) {
    this.write(gutil.colors.green.bold, msg);
  }
};

// module.exports = logger;

gulp.task("test", function(){
    logger.success("hello gulp");
    return;
});

gulp.task("serve", function () {

  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});