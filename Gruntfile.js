/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Authored <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;*/\n',
    // 任务配置。
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['variable.js', 'utils.js', 'game.js', 'achievements.js', 'constants.js', 'core.js', 'loading.js', 'notification.js', 'resources.js', 'saving.js', 'solarSystem.js', 'solCenter.js', 'wonder.js', 'interstellar.js'],
        dest: '<%= pkg.name %>.min.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: '<%= pkg.name %>.min.js'
      }
    }
  });

  // 这些插件提供必要的任务。
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // 默认任务.
  grunt.registerTask('default', ['concat', 'uglify']);

};
