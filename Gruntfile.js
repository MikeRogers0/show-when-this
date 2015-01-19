module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  var banner = ( function() {
    var contents = grunt.file.read('src/show-when-this.js');
    var re = new RegExp('^\\s*(?:\\/\\*[\\s\\S]*?\\*\\/)\\s*');
    var matches = contents.match( re );
    return matches[0];
  })();

  grunt.initConfig({
    jshint: {
      all: ['src/*.js', 'test/*.js']
    },
    qunit: {
      all: ['test/jquery-2.1.3.html', 'test/zepto.html']
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

  grunt.registerTask('test', ['jshint', 'qunit']);
  grunt.registerTask('default', ['test', 'uglify']);
};
