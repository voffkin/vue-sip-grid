import Vue from 'vue'
import App from './App.vue'
import { Row, Column } from './plugins/Grid';

Vue.component('column', Column);
Vue.component('row', Row);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
