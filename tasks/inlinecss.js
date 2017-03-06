'use strict';

module.exports = {
  main: {
    options: {
      preserveMediaQueries: true,
      removeStyleTags: true,
      insertPreservedExtraCss: true
    },
    files: [
      { expand: true,
        cwd: './web/',
        src: ['*.html'],
        dest: 'dist/'
      }
    ]
  }
};
