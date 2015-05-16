module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  var banner = ( function() {
    var contents = grunt.file.read('src/show-when-this.js');
    var re = new RegExp('^\\s*(?:\\/\\*[\\s\\S]*?\\*\\/)\\s*');
    var matches = contents.match( re );
    return matches[0];
  })();

  grunt.initConfig({
    qunit: {
      all: ['test/jquery-2.1.html', 'test/zepto-1.11.html']
    },
    uglify: {
      showWhenThis: {
        files: {
          'show-when-this.min.js': [ 'src/show-when-this.js' ]
        },
        options: {
          banner: banner
        }
      }
    }
  });

  grunt.registerTask('test', ['qunit']);
  grunt.registerTask('default', ['test', 'uglify']);
};
