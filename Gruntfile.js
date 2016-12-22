/*
 After you have changed the settings under responsive_images
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

//Use the following line to import a .yml config file which will name all of
//our directories we might want to reference in the Gruntfile.js. Helps with
//maintenance.
    var config = grunt.file.readYAML('Gruntconfig.yml');

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            /* Change these */
            width: 1200,
            suffix: '_large',
            quality: 20
          }]
        },

        /*
        You don't need to change this part if you don't change
        the directory structure.
        */
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'img_src/',
          dest: 'img/'
        }]
      }
    },

    /* Clear out the images directory if it exists */
    clean: {
      dev: {
        src: ['img'],
      },
    },

    /* Generate the images directory if it is missing */
    mkdir: {
      dev: {
        options: {
          create: ['img']
        },
      },
    },
    jshint: {
      all: [
        'Gruntfile.js',
        '/js/**.js'
      ]
    }
  });

  grunt.registerTask('default',
     ['jshint',
      'clean',
      'mkdir',
      'responsive_images']);
};