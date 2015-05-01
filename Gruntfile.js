/*global module:false*/
module.exports = function(grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({

        // the magic
        atomizer: {
            // basic
            dev: {
                files: [{
                    src: ['./examples/**/*.html'],
                    dest: './examples/css/atomic.css'
                }]
            }
        },

        // simple connect server
        connect: {
            dev: {
                options: {
                    port: 3000,
                    base: 'examples',
                    open: true
                }
            }
        },

        // watch for changes and run tasks
        watch: {
            dev: {
                options: {
                    livereload: true
                },
                files: [
                    './examples/**/*.html'
                ],
                tasks: ['atomizer']
            }
        }

    });

    // default task runs atomizer, start server and watch for changes
    grunt.registerTask('default', ['atomizer', 'connect', 'watch']);

};
