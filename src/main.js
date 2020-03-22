import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'
import storage from './utils/storage.js'

Vue.prototype.$pageTo = router
Vue.prototype.$store = store
Vue.prototype.$storage = storage

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App,
  store
})
app.$mount()
