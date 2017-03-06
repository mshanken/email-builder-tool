'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var options = {
    config : {
      src: './tasks/*.js'
    },
    pkg: grunt.file.readJSON('package.json'),
    jsonData: grunt.file.readJSON('./assets/data/data.json'),
    allkeys: grunt.file.readJSON('./assets/data/allkeys.json'),
    replacements: require('./tasks/replacements'), // Regex for refactor task.
    dir: '<%= pkg.settings.root %>',
    filename: grunt.option('filename')?grunt.option('filename'):'missingfilename.html',
    layouts: {
      layout: 'default',
      page: 'index',
      style: 'app'
    },
    createtaskrun: [
      'sass',
      'htmlbuild:default',
      'run'
    ]
  };

  // load all grunt tasks
  // require('load-grunt-tasks')(grunt,{pattern: ['grunt-*', 'assemble']},{scope: 'devDependencies'});
  // Load grunt configurations automatically
  var configs = require('load-grunt-configs')(grunt, options);

  grunt.initConfig(configs);

  // grunt.registerTask('build', ['concat','uglify','less']);
  // grunt.registerTask('default', []);

  grunt.registerTask('process', [
    // 'inlinecss',
    'frep',
    'htmlmin:minify'
  ]);
  grunt.registerTask('export', [
    's3:prod'
  ]);
  grunt.registerTask('import', [
    's3:dev'
  ]);
  grunt.registerTask('clear', [
    'copy',
    'clean'
  ]);
};
