require('./index.scss');
const template = require('./index.html');
const ImageProvider = require('../../models/image_provider');

module.exports = {
  name: 'cmp-on-screen-control',
  properties: {
    template,
    methods: {
      onHeartBtnClicked() {
        this.$emit('favorite');
      },
      onNextBtnClicked() {
        ImageProvider.grabRandomImage(window.currentImageId);
      },
    },
  },
};
