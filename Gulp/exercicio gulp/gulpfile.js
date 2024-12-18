const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')

function comprimeImg(){
  return gulp.src('./source/images/*')
  .pipe(imagemin())
  .pipe(gulp.dest('./build/images'))
}

function funcaoPadrao(callback){
  console.log('Executado via Gulp');
  callback();
}

function comprimeJavaScript(){
  return gulp.src('./source/scripts/*.js')
  .pipe(uglify())
  .pipe(gulp.dest('./build/scripts'))
}


function compilaSass(){
  return gulp.src('./source/style/main.scss') 
					.pipe(sass({outputStyle: 'compressed'})) 
					.pipe(gulp.dest('./build/styles')) 
}


exports.default = funcaoPadrao;
exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImg;
