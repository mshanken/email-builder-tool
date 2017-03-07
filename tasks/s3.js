'use strict';

module.exports = {
  options: {
    key: '<%= allkeys.aws.AWSAccessKey %>', // Use the variables
    secret: '<%= allkeys.aws.AWSSecretKey %>', // You can also use env variables
    access: 'public-read',
  },
  prod: {
    options: {
      maxOperations: 10
    },
    upload: [
      {
        src: 'web/*.{html,htm,mjml}',
        dest: 'promo/html-archive',
        options: {
          bucket: 'assets.mshanken.com'
        }
      },
      {
        src: 'web/images/*.{jpg,gif,png}',
        dest: 'promo/images',
        options: {
          bucket: 'assets.mshanken.com'
        }
      }
    ]
  },
  dev: {
    options: {
      bucket: 'assets.mshanken.com'
    },
    download: [
      {
        src: 'promo/html-archive/<%= filename %>',
        dest: 'web/<%= filename %>',
      }
    ]
  }
};
// http://fettblog.eu/blog/2014/05/27/undocumented-features-rename/
