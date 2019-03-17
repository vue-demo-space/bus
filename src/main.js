import Vue from 'vue'
import App from './App.vue'
import Bus from './bus'

Vue.config.productionTip = false
Vue.prototype.$bus = Bus 

new Vue({
  render: h => h(App),
}).$mount('#app')
