/**
 * To debug gruntfile: 
 * node-debug $(which grunt) task
 */

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });
    
    
    grunt.registerTask('default', ['']);

};