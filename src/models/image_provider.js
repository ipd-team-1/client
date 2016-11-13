/* global Blob, document, window */

const axios = require('axios');

module.exports = {
  grabRandomImage: () => {
    axios({
      method: 'get',
      url: '/api/images/random',
      responseType: 'json',
    })
      .then((res) => {
        document.body.style.backgroundImage = `url(${res.data.url})`;
      });
  },
};
