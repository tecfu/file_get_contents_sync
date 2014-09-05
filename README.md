file_get_contents_sync
======================

Nodejs module to get the contents of a directory or a file synchronously.
Intended to be used in Gruntfile / infrequent situations.
 
Returns either a javascript object: 

```
require("file_get_contents_sync")("/path/to/somedir")
```

```
{
key1:"result1 ",
key2:function(){},
...
} 
```

OR the content of all files as a single string when second arg equals 'string'. 

```
require("file_get_contents_sync")("/path/to/somedir","string")
```

```
result1 function(){}
```


- Can be run as a node module or in CLI.




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
$ node node_modules/file_get_contents_sync/src/main.js /path/to/js
```

- Return all the files in a directory as a single string:

```
$ node node_modules/file_get_contents_sync/src/main.js /path/to/html string
```