/**
 * To debug gruntfile: 
 * node-debug $(which grunt) task
 */

module.exports = function(grunt) {
    
    var _src = [
        'src/js/main.js'
    ];
    
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
        ,options : {
            timestamp : (function(){

                //A FORMATTED TIMESTAMP STRING FOR BACKUP NAMING
                var d = new Date(),dstr = '';
                dstr = ('0' + d.getHours()).slice(-2)
                + ':' + ('0' + d.getMinutes()).slice(-2)
                + ':' + ('0' + d.getSeconds()).slice(-2);

                return dstr;

            }())
        }
        ,uglify: {
            all: {
                options: {
                    banner: '/** \n<%= pkg.name %>\nVersion: <%= pkg.version %> \nBuilt: <%= grunt.template.today("yyyy-mm-dd") %> <%= options.timestamp %>\nAuthor: <%= pkg.author %>  \n*/\n'
                    ,mangle : true
                    ,compress : true
                    ,wrap : true
                }
                ,files: {
                    'dist/<%= pkg.name %>.all.min.js': _src
                }
            }
            ,devel: {
                options: {
                    banner: '/** \n<%= pkg.name %>\nVersion: <%= pkg.version %> \nBuilt: <%= grunt.template.today("yyyy-mm-dd") %> <%= options.timestamp %>\nAuthor: <%= pkg.author %>  \n*/\n'
                    ,sourceMap : true
                    ,sourceMapIncludeSources : true
                    /*MANGLED VARIABLES WILL NOT MAP CORRECTLY TO SOURCE MAP*/
                    ,mangle : false
                    ,compress : false
                    ,beautify : true
                    ,wrap : true
                },
                files: {
                    'dist/<%= pkg.name %>.all.devel.js': _src
                }
            }
        }
    });
    
    
    grunt.loadNpmTasks('grunt-contrib-uglify'); 
    
    grunt.registerTask('default', ['uglify']);

};