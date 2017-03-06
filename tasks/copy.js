'use strict';

module.exports = {
  assets: {
    files: [
      { expand: true, cwd: './web/', src: ['*'], dest: 'archives/' },
      { expand: true, cwd: './web/images/', src: ['*'], dest: 'archives/' },
      { expand: true, cwd: './dist/', src: ['*'], dest: 'archives/' },
    ]
  }
};
// http://fettblog.eu/blog/2014/05/27/undocumented-features-rename/