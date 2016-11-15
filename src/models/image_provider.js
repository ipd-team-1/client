/* global Blob, document, window */

const axios = require('axios');

module.exports = {
  grabRandomImage: (currentImageId) => {
    const myCurrentImageId = currentImageId !== undefined ? currentImageId : '';
    axios({
      method: 'get',
      url: `/api/images/random/${myCurrentImageId}`,
      responseType: 'json',
    })
      .then((res) => {
        document.body.style.backgroundImage = `url(${res.data.url})`;
        window.currentImageId = res.data._id;
      });
  },
};
