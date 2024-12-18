const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); 
const sourcemaps = require('gulp-sourcemaps');

function compilaSass(){
	return gulp.src('./source/styles/*.scss')
					.pipe(sourcemaps.init()) 
					.pipe(sass({
						outputStyle: 'compressed'
						})) 
					.pipe(sourcemaps.write('./maps'))
					.pipe(gulp.dest('./build/styles')) 
}

function funcaoPadrao(callback){ 
	setTimeout(function(){
		console.log('Executado via Gulp');
		callback();
	}, 2000)
	
}

function dizOi(callback){
	console.log('Olá Gulp');
	dizTchau();
	callback();
}

function dizTchau() { 
	console.log('Tchau Gulp')
}

exports.default = gulp.parallel(funcaoPadrao, dizOi);
exports.dizOi = dizOi;
exports.sass = compilaSass;