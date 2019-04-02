# rmdir2

Maintained as of 2019

Remove all files in the given path recursively.

## Description

Or just use `require( 'child_process' ).exec` and call `rm -r`

    const exec = require('child_process').exec;
    var path = '/path/to/the/dir';

    exec('rm -r ' + path, function (err, stdout, stderr) {
      // your callback goes here
    });

You can also checkout [rimraf](https://github.com/isaacs/rimraf) from [isaacs](https://github.com/isaacs).

## Requires

    node >= 8.0.0

## Installation

    npm install rmdir2

## Usage

> Require the module before using

    const rmdir = require('rmdir');

### rmdir(path, [options], [callback]);

You can optionally pass in an alternate fs implementation by passing in `options.fs`.Your implementation should have `fs.lstat(path, callback)`, `fs.unlink(path, callback)`, `fs.readdir(path, callback)`, `fs.rmdir(path, callback)`, and `fs.exists(path, callback)` implemented.

#### Arguments

> path

    type: String
    desc: The path to be clear.

> options

    type: Object
    desc: Options to be used when removing all files.

> callback

    type: Function
    desc: The callback to be called after all files are removed.
    arguments:
      err:
      type: Error
    dirs:
      type: Array
    desc: The removed dirs.
    files:
      type: Array
    desc: The removed files.

#### Example

```js
  const rmdir = require('rmdir');
  let path = '/path/to/the/dir';

  rmdir(path + '/assets', (err, dirs, files) => {
    console.log(dirs);
    console.log(files);
    console.log('all files are removed');
  });
```


# History

## 2.0.5 / 2019-04-01
* Fix ESIGIT Issue

## 2.0.4 / 2019-04-01
* Fix NPM issue

## 2.0.3 / 2019-04-01
* Update documentation and history
* Update to ES6
* Add `package-lock.json`
* Implement `graceful-fs` for file operations

## 2.0.2 / 2019-04-01
* Remove duplicate Readme

## 2.0.1 / 2019-04-01
* Sync tags

## 2.0.0 / 2019-04-01
* Forked from rmdir to rmdir2
* Implement Promisify PR from imaman

## 1.2.0 / 2016-01-19
- [new feature] Calling it without the callback

## 1.1.0 / 2015-02-16
- [new feature] Added the ability to pass in an optional alternative file system to remove the files

## 1.0.4 / 2014-01-09
- [bug fix] Return `callback` instead of `ready` after `unlink` files

## 1.0.3 / 2013-12-18
- [bug fix] Throw exception if fir or file doesn't exist

## 1.0.2 / 2013-12-12
- [update packages] node.flow->1.2.3

## 1.0.1 / 2013-12-11
- [bug fix] Use async api to avoid error
- [refactoring] Use `fs.lstat` instead of `fs.stat` for `symlink`

## 1.0.0 / 2012-07-23
- [refactoring] Use `fs` instead of `path` for node v0.8.x

## 0.0.3 / 2012-07-08
- [bug fix] Execute callback with remove single file

## 0.0.2 / 2012-07-08
- Remove single file as well

## 0.0.1 / 2012-07-08
- Initial release
- Renamed from rmdirr
- [bug fix] Extra slash at the end

## Credit

* [Nullivex](https://github.com/nullivex)
* [Itay Maman](https://github.com/imaman)
* [Aaron Larner](https://github.com/alarner)
* [Glen R.Goodwin](https://github.com/arei)
* [David Pate](https://github.com/DavidTPate)
* [Radare](https://github.com/radare)

## License

(The MIT License)

Copyright(c) 2011-2019 NULLIVEX LLC, dreamerslab & lt; ben@ dreamerslab.com & gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files(the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and / or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
