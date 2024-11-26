const gulp = require('gulp'); //Vamos importar o pacote do gulp que instalamos.

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