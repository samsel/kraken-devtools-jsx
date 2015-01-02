'use strict';

var React = require('react-tools');

module.exports = function(options) {

  options.ext = options.ext || 'jsx';

  return function(data, args, callback) {
    // react-tools throws :( so try-catch the transformation
    try {
      var transform = React.transform(data.toString('utf8'), {});
      callback(null, transform);
    }
    catch (err) {
      callback(err);
    }
  };
};
