'use strict';
require('should');
const path = require('path');
const run = require('run-gulp-task');
const PrettyError = require('pretty-error');
const PluginError = require('gulp-util').PluginError;
const reactPropTable = require('../index');
const vfs = require('vinyl-fs');
const File = require('vinyl');
const pe = new PrettyError();
const CWD = process.cwd();
const fs = require('fs');
const testPath = path.join(CWD, 'test');
const getFileContent = p => fs.readFileSync(p).toString().trim();

describe('gulp-react-prop-table', function() {
  describe('should work', () => {
    let casePath = path.join(testPath, 'case');
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
      ['group.md', 'index.md', 'option.md'].forEach(fileName => getFileContent(path.join(testPath, 'case', 'build', fileName)).should.be.eql(getFileContent(path.join(testPath, 'case', 'expect', fileName))));
    });
  });
  describe('should handle errors', () => {
    it('should do nothing when contents is null', done => {
      const rpt = reactPropTable();
      rpt.write(new File({
        contents: null
      }));
      rpt.once('data', file => {
        file.isNull().should.be.true();
        done();
      });
    });
    it('should throw Error when stream', done => {
      vfs.src(path.join(__dirname, 'case', 'src', 'index.jsx'), {
          buffer: false
        })
        .pipe(reactPropTable())
        .on('error', e => {
          e.message.should.be.eql('Stream is not supported');
          e.should.be.instanceOf(PluginError);
          done();
        });
    });
    it('should throw when syntax error', done => {
      vfs.src(path.join(__dirname, 'case', 'src', 'index.less'))
        .pipe(reactPropTable())
        .on('error', e => {
          e.message.should.be.eql('Unexpected token (1:0)');
          e.should.be.instanceOf(PluginError);
          done();
        });
    });
  });
});
