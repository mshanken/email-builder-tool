'use strict';

module.exports = {
  promo: {
    options: {
      replacements: '<%= replacements.intemplate %>'
    },
    files: [
      { expand: true, cwd: './dist/', src: ['*.html'], dest: 'dist/', ext: '.html' }
    ]
  }
};  