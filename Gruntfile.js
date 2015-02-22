module.exports = function(grunt){

   grunt.initConfig({
    update_readme: {
      'package.json': {
         'readme': 'README.md'
      }
    }
  });

	grunt.loadNpmTasks('grunt-update-readme');

	grunt.registerTask('default', ['update_readme']);
};
