require('./index.scss');
const template = require('./index.html');
const ImageProvider = require('../../models/image_provider');

module.exports = {
  name: 'cmp-art-display',
  properties: {
    props: ['isFavorited'],
    template,
  },
};

ImageProvider.grabRandomImage();
