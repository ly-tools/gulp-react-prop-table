'use strict';
require('should');
const path = require('path');
const run = require('run-gulp-task');
const PrettyError = require('pretty-error');
const pe = new PrettyError();
const CWD = process.cwd();
const fs = require('fs');
const testPath = path.join(CWD, 'test');
const getFileContent = p => fs.readFileSync(p).toString().trim();

describe('gulp-react-prop-table', function() {
  describe('case1', () => {
    let casePath = path.join(testPath, 'case1');
    before(done => {
      process.chdir(casePath);
      run('default', path.join(process.cwd(), 'gulpfile.js'))
        .catch(e => {
          console.log(pe.render(e));
          return e;
        })
        .then(e => {
          process.chdir(CWD);
          done(e);
        });
    });
    it('should build documentation', function() {
      ['group.md', 'index.md', 'option.md'].forEach(fileName => getFileContent(path.join(testPath, 'case1', 'build', fileName)).should.be.eql(getFileContent(path.join(testPath, 'case1', 'expect', fileName))));
    });
  });
});
