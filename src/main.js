import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue';

new Vue({
  el: '#app',
  render: h => h(App)
});

Vue.use(SuiVue);
