/** 
file_get_contents_sync
Version: 0.1.0 
Built: 2014-09-04 19:57:05
Author: tecfu.com <help@tecfu.com> (http://github.com/tecfu)  
*/

(function(exports, global) {
    global["true"] = exports;
    var fn = function(path, format) {
        var fs = require("fs");
        var private = {};
        private.init = function() {
            if (typeof path !== "string") {
                console.error(__filename + " requires a PATH argument.");
                return;
            }
            var r = private.value(path);
            if (format) {
                switch (format) {
                  case "string":
                    var arr = [];
                    for (var i in r) {
                        if (typeof r[i] !== "string") {
                            r[i] = r[i].toString();
                        }
                        arr.push(r[i]);
                    }
                    r = arr.join("");

                  default:                }
            }
            return r;
        };
        private.value = function(path) {
            var arr = [], r, result = {};
            if (fs.lstatSync(path).isDirectory()) {
                var dir = path;
                var files = fs.readdirSync(path);
                for (var i in files) {
                    path = dir + "/" + files[i];
                    r = private.get_path(path);
                    arr.push(r);
                }
            } else {
                r = private.get_path(path);
                arr.push(r);
            }
            result[path] = arr;
            return result;
        };
        private.is_path_executable = function(path) {
            var ext = path.split(".");
            ext = ext[ext.length - 1];
            if (ext === "js") {
                return true;
            } else {
                return false;
            }
        };
        private.get_path = function(path) {
            var r;
            if (private.is_path_executable(path)) {
                r = require(path);
            } else {
                r = fs.readFileSync(path).toString();
            }
            return r;
        };
        return private.init();
    };
    if (require.main === module) {
        var r = fn(process.argv[2], process.argv[3]);
        console.log(r);
    } else {
        module.exports = fn;
    }
})({}, function() {
    return this;
}());
//# sourceMappingURL=file_get_contents_sync.all.devel.js.map