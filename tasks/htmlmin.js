'use strict';

module.exports = {
  minify: {
    options: {
      removeComments: true,
      removeEmptyAttributes: true,
      collapseWhitespace: true
    },
    files: [
      { expand: true, cwd: './dist/', src: ['*.html'], dest: 'dist/' }
    ]
  }
};
