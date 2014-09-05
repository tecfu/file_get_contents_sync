file_get_contents_sync
======================

Nodejs module to get the contents of a directory or a file synchronously. Returns object keyed filename:result or a single string result. Can be run as module on in CLI.


Intended to be used in Gruntfile situations.


# Usage:

## As a node module:

```
var fgc = require("file_get_contents_sync")("/path/to/somedir","string");
```

## From CLI:

```
$ /node_modules/file_get_contents_sync/src/main.js /path/to/dir string
```