# gulp-react-prop-table

[![Test coverage](https://img.shields.io/coveralls/ly-tools/gulp-react-prop-table.svg?style=flat-square)](https://coveralls.io/r/ly-tools/gulp-react-prop-table?branch=master)
[![Build Status](https://travis-ci.org/ly-tools/gulp-react-prop-table.png)](https://travis-ci.org/ly-tools/gulp-react-prop-table)
[![Dependency Status](https://david-dm.org/ly-tools/gulp-react-prop-table.svg)](https://david-dm.org/ly-tools/gulp-react-prop-table)
[![devDependency Status](https://david-dm.org/ly-tools/gulp-react-prop-table/dev-status.svg)](https://david-dm.org/ly-tools/gulp-react-prop-table#info=devDependencies)
[![NPM version](http://img.shields.io/npm/v/gulp-react-prop-table.svg?style=flat-square)](http://npmjs.org/package/gulp-react-prop-table)
[![node](https://img.shields.io/badge/node.js-%3E=_4.0-green.svg?style=flat-square)](http://nodejs.org/download/)
[![License](http://img.shields.io/npm/l/gulp-react-prop-table.svg?style=flat-square)](LICENSE)
[![npm download](https://img.shields.io/npm/dm/gulp-react-prop-table.svg?style=flat-square)](https://npmjs.org/package/gulp-react-prop-table)

A gulp plugin use react-prop-table to generate documentation for React project

## Installation

```bash
$ npm install --save-dev gulp
$ npm install --save-dev gulp-react-prop-table
```

## Usage

```javascript
var gulp = require('gulp');
var plugin = require('gulp-react-prop-table');

gulp.task('demo', function() {
  return gulp.src('src/**/*')
    .pipe(plugin({
      // your options
    }))
    .pipe(gulp.dest('build'));
});
```

## Options


### template

String, Default `'# <%= path %>\n\n<%= contents %>'`

String template of documentation, `path` will be path of the file and `contents` will be the markdown result

### headers

Configuration of the header

* config.headers:Array(Object) => Headers config
  * header.name:String => key in data object
  * header.align:String => text align of the column
  * header.title:String => title of the column

Default:

```
[{
  name: 'name',
  align: ':---'
}, {
  name: 'description',
  align: ':-----'
}, {
  name: 'type',
  align: ':---'
}, {
  name: 'required',
  align: ':---:'
}, {
  name: 'defaultValue',
  align: ':---:',
  title: 'Default Value'
}]
```

## Test

```bash
$ npm run test
$ npm run test-cov
$ npm run test-travis
```

## License

The MIT License (MIT)

Copyright (c) 2015 ly-tools

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
