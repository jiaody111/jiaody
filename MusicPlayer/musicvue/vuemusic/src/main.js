import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import './assets/css/base.scss'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
fastclick.attach(document.body)
Vue.use(ElementUI)
Vue.use(VueLazyload, {
  loading: require('./assets/images/loading.png')
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
