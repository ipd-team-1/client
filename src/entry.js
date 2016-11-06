const Vue = require('vue/dist/vue.js');

function componentize(component) {
  Vue.component(component.name, component.properties);
}

componentize(require('./components/root'));
componentize(require('./components/art_display'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
});
