require('./index.scss');
const template = require('./index.html');

module.exports = {
  name: 'cmp-root',
  properties: {
    template,
    methods: {
      onFavorite() {
        // TODO: Complete.
        console.log("onFavorite has been clicked");
        this.isFavorited = true;
      },
    },
    data() {
      return {
        isFavorited: false,
      };
    },
  },
};
