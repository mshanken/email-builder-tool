'use strict';

module.exports = {
  dist: {                             // Target
    options: {                       	// Target options
      //style: 'expanded'
    },
    files: {                         	// Dictionary of files
      'web/<%= filename %>.css': 'template-builder/assets/sass/<%= layouts.style %>.scss'    // 'destination': 'source'
    }
  }
};
