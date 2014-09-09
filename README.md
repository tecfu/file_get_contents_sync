file_get_contents_sync
======================

Nodejs module to get the contents of a directory or a file synchronously.


## Usages:

### Node Module

- Return the contents of all matched files as a js object: 

```
require("file_get_contents_sync")("/path/to/somedir");

//{path1:"...contents...",path2:function(){}} 
```

- Return the contents of all matched files as a single string:

```
require("file_get_contents_sync")("/path/to/somedir","string");

//"...contents...function(){}"
```


### Command line :


- Return the contents of all matched files as a js object:

```
$ node node_modules/file_get_contents_sync/src/main.js /path/to/js
```

- Return the contents of all matched files as a single string:

```
$ node node_modules/file_get_contents_sync/src/main.js /path/to/html string
```