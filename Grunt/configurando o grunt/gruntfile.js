module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		less: {
			development: { //Essa devepmen podemos esta criando configuraçoes diferentes
			//A partir do ambiente onde o grunt e executado
				files: {
					'main.css': 'main.less'
				}
			},
			production: {
				options: {
					compress: true
				},
				files: {
					'main.min.css': "main.less"
				}
			}
		},
		sass: {
			dist: {
				options: {
				style: 'compressed'
				},
				files: {
					'main2.css': 'main.scss'
				}
			}
		}
	})
	
	grunt.registerTask('olaGrunt', function(){
	
		const done = this.async();
		setTimeout(function(){
			console.log('Olá Grunt!');
			done();
		}, 3000)
		
	})
	
	grunt.loadNpmTask('grunt-contrib-less');
	grunt.loadNpmTask('grunt-contrib-sass');
	
	grunt.registerTask('default', ['less', 'sass']) // Aqui podemos um array do nome de todas
	//as tarfeas que serao executadas quando escrevermos npm run grunt
}