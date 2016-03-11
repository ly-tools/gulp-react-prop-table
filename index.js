'use strict';

const _ = require('lodash');
const through = require('through2');
const Docer = require('react-prop-table');
const PluginError = require('gulp-util').PluginError;
const logger = require('linglog')('gulp-react-prop-table', {
  timeFormat: 'HH:mm:ss'
});
const path = require('path');
const DEFAULT_OPTS = {
  template: '# <%= path %>\n\n<%= contents %>'
};

module.exports = opts => {
  opts = _.defaults(opts || {}, DEFAULT_OPTS);
  return through.obj((file, encoding, callback) => {
    if (file.isNull()) return callback(null, file);
    if (file.isStream()) {
      logger.error(`Stream is not supported: ${file.path}`);
      return callback(new PluginError('gulp-react-prop-table', `Stream is not supported`));
    }
    try {
      file.contents = new Buffer(_.template(opts.template)({
        path: path.relative(process.cwd(), file.path),
        contents: Docer.markdown(file.contents.toString(), opts)
      }));
      file.path = file.path.replace(path.extname(file.path), '.md');
      callback(null, file);
    } catch (e) {
      logger.error(e.message);
      callback(new PluginError('gulp-react-prop-table', e));
    }
  });
};
