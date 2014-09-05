/**
 * -- Can be called in console with __filename path format
 * -- Can be required with require(moduleName)(path,format)
 * 
 */
var fn = function(path,format){

    var fs = require("fs");
    var private = {};

    ////////////////////////////////////////
    //  PUBLIC VARIABLES
    ////////////////////////////////////////


    ////////////////////////////////////////
    //  PRIVATE VARIABLES
    ////////////////////////////////////////
    

    ////////////////////////////////////////
    //  PUBLIC METHODS
    ////////////////////////////////////////


    ////////////////////////////////////////
    //  PRIVATE METHODS
    ////////////////////////////////////////
    
    
    private.init = function(){
        
        if(typeof path !== 'string'){
            console.error(__filename + ' requires a PATH argument.');
            return;
        }

        //Get all files in the path given as an object
        var r = private.value(path);
      
        //Format
        if(format){
            switch(format){
                
                //Return all results as a single string.
                case("string"):
                    var arr = [];
                    for(var i in r){
                        
                        if(typeof r[i] !== 'string'){
                            r[i] = r[i].toString();
                        }
                        
                        arr.push(r[i]);
                    }
                    
                    r = arr.join("");
                    
                default:
            }
        }
      
        return r;

    };
    
    
    /**
     * Fetches, names template files.
     * 
     * @param {string} path to lookup
     * @returns {array}
     */
    private.value = function(path){
        
        var arr = []        //return value container
            ,r              //loop result
            ,result = {}    //return result
            ;
        
        //If path is a directory
        if(fs.lstatSync(path).isDirectory()){
            
            var dir = path;
            var files = fs.readdirSync(path);
                            
            for(var i in files){

                path = dir + '/' + files[i];

                r = private.get_path(path);
                
                arr.push(r);
            }

        }
        else{
            
            r = private.get_path(path);
                
            arr.push(r);
        }
        
        result[path] = arr;
        
        return result;
    };
    
    
    private.is_path_executable = function(path){
        
        var ext = path.split(".");
        ext = ext[ext.length-1];

        if(ext === 'js'){
            return true;
        }
        else{
            return false;
        }
    };
    
    
    private.get_path = function(path){
        
        var r;
        
        if(private.is_path_executable(path)){
                    
            r = require(path);
        }
        else{

            r = fs.readFileSync(path).toString();
        }

        return r;
    };
    
    
    //Run constructor
    return private.init();
    
};

if(require.main === module){ 
    //Called directly
    var r = fn(process.argv[2],process.argv[3]);
    console.log(r);
}
else{ 
    //Required as a module
    module.exports = fn;
}