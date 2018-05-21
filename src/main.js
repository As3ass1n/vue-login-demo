import Vue from 'vue'
import VueRouter from 'vue-router';
import routers from './routers';
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
