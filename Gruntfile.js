module.exports = function(grunt) {

    // task configurations
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),


        /**
         * Minify CSS
         */
        cssmin: {
            options: {
                mergeIntoShorthands: true,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'styles.css': ['original.css']
                }
            }
        },


        /**
         * Optimize Images
         */
        imagemin: {
            dynamic: {
                files: [
                    {
                        expand: true,
                        cwd: 'images_original/',
                        src: ['*.{png,jpg,jpeg,gif}'],
                        dest: 'images/'
                    },
                    {
                        expand: true,
                        cwd: 'images_original/bundles/',
                        src: ['*.{png,jpg,jpeg,gif}'],
                        dest: 'images/bundles/'
                    },
                    {
                        expand: true,
                        cwd: 'images_original/index/',
                        src: ['*.{png,jpg,jpeg,gif}'],
                        dest: 'images/index/'
                    },
                    {
                        expand: true,
                        cwd: 'images_original/internet/',
                        src: ['*.{png,jpg,jpeg,gif}'],
                        dest: 'images/internet/'
                    },
                    {
                        expand: true,
                        cwd: 'images_original/tv/',
                        src: ['*.{png,jpg,jpeg,gif}'],
                        dest: 'images/tv/'
                    },
                    {
                        expand: true,
                        cwd: 'images_original/voice/',
                        src: ['*.{png,jpg,jpeg,gif}'],
                        dest: 'images/voice/'
                    }
                ]
            }
        },



        /**
         * JS Minify
         */
         uglify: {
             my_target: {
               files: {
                 'base.js': ['original.js']
               }
             }
           }


    });


    // npm modules
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');


    // grunt tasks
    grunt.registerTask('default', ['cssmin', 'uglify', 'imagemin']);
};
