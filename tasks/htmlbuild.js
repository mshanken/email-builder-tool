'use strict';

module.exports = {
  default: {
    files: {
      'temp/<%= filename %>.html':'template-builder/layouts/<%= layouts.layout %>.html'
    },
    options: {
      styles: {
        bundle: '<%= filename %>.css'
      },
      sections: {
        layout: {
          content: 'template-builder/pages/<%= layouts.page %>.html'
        }
      },
      data: {
        title: '<%= filename %>',
        style: '<%= filename %>'
      }
    }
  },
  promoAll: {
    files: {
      'temp/<%= filename %>-All.html':'template-builder/layouts/<%= layouts.layout %>.html'
    },
    options: {
      styles: {
        bundle: '<%= filename %>.css'
      },
      sections: {
        layout: {
          content: 'template-builder/pages/<%= layouts.page %>-All.html'
        }
      },
      data: {
        title: '<%= filename %>',
        style: '<%= filename %>'
      }
    }
  },
  promoEW: {
    files: {
      'temp/<%= filename %>-EW.html':'template-builder/layouts/<%= layouts.layout %>.html'
    },
    options: {
      styles: {
        bundle: '<%= filename %>.css'
      },
      sections: {
        layout: {
          content: 'template-builder/pages/<%= layouts.page %>-Ews.html'
        }
      },
      data: {
        title: '<%= filename %>',
        style: '<%= filename %>'
      }
    }
  }
};