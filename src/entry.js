const Vue = require('vue/dist/vue.js');

function componentize(component) {
  Vue.component(component.name, component.properties);
}

componentize(require('./components/art_display/index.js'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
});
