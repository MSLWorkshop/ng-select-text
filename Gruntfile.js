module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/ng-select-text.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      gruntfile: {
        files: 'Gruntfile.js',
        tasks: ['default'],
      },
      src: {
        files: ['js/**/*.js', 'less/**/*.less'],
        tasks: ['default'],
      }
    },
    copy: {
      main: {
        files: [{
          src: ['js/ng-select-text.js'],
          dest: 'dist/ng-select-text.js'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'copy']);

};