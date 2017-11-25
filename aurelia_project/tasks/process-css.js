import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import project from '../aurelia.json';
import {build} from 'aurelia-cli';

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

export default function processCSS() {
  return gulp.src(project.cssProcessor.source)
    .pipe(plumber({
      errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(project.cssProcessor.output))
    .pipe(build.bundle());
}
