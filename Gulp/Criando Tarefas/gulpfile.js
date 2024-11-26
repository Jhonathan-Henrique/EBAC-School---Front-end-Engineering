function funcaoPadrao(callback){
  console.log('Executado via Gulp');
  callback ();
}

function dizOi(callback){
  console.log('Ola gulp');
  dizTchau();
  callback();
}

function dizTchau() {
  console.log('Tchau Gulp')
}

exports.default = funcaoPadrao;
exports.dizOi = dizOi; 