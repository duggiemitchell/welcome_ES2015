"use sctrict";

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

 gulp.task("default", () => {
   return browserify("src/app.js") //
    .transform("babelify")//transpiles source code
    .bundle()//groups files in one
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));///writing to dist file
  });
