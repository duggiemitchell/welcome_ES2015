# welcome_ES2015
Use ES2015 now with Babel, Gulp & Browserify

Starter code for transpiling ES2015 with modules with Babel, Gulp & Browserify

Make sure you have the most recent version of Gulp installed.  Run the following command prompt:

`gulp -v`

Should Return:
```
CLI version 3.9.0
Local version 3.9.0
```
If not, install it globally with:

`npm install -g gulp-cli`

Install gulp in your project dependencies:

`npm install --save-dev gulp`

At your project root create a gulpfile.js file.  To use ES6 in your project, it's important yo insyal Babel (Babel 6) as a dependecy along with the es2015 plugin preset
```
npm install babel-core babel-preset-2015 --save-dev
```
Then, create a `babeltc` config filr to enable the es2015 preset:
```
touch babelrc
```
Add this line of code within the file:
```
{
  "presets": ["es2015"]
}
```
We then need to instrct gulp to use Babel by renaming `gulpfile.js` to `gulpfile.babel.js`.  And now, we can use all the cool new features of ES6 like Promises and classes in our projects.  

```
///super awesome ES2015 module imports
import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";
///gulp default task creating our project file  structure
gulp.task("default", () => {

  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));
});
```
