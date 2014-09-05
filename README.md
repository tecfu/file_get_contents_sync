file_get_contents_sync
======================

Nodejs module to get the contents of a directory or a file synchronously.Intended to be used in Gruntfile / infrequent situations.
 
Returns either a javascript object keyed: 

```
{
filename1:"result1",
filename1:function(){},
...
} 
```

or the content of all files as a single string. 

- Can be run as module on in CLI.




# Usage:

## As a node module:

- [Default] Return all the files in a directory as an array of nodejs modules:

```
var fgc = require("file_get_contents_sync")("/path/to/js");
```

- Return all the files in a directory as a single string:

```
var fgc = require("file_get_contents_sync")("/path/to/somedir","string");
```

## From CLI:


- [Default] Return all the files in a directory as an array of nodejs modules:

```
$ /node_modules/file_get_contents_sync/src/main.js /path/to/js
```

- Return all the files in a directory as a single string:

```
$ /node_modules/file_get_contents_sync/src/main.js /path/to/html string
```