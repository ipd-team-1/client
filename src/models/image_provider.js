/* global Blob, document, window */

const axios = require('axios');

module.exports = {
  grabRandomImage: () => {
    axios({
      method: 'get',
      url: 'https://source.unsplash.com/category/nature',
      responseType: 'blob',
    })
      .then((res) => {
        const blob = new Blob([res.data], { type: 'image/jpeg' });
        const urlCreator = window.URL || window.webkitURL;
        const imageUrl = urlCreator.createObjectURL(blob);
        document.body.style.backgroundImage = `url(${imageUrl})`;
      });
  },
};
