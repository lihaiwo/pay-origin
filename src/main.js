import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import config from '@/config'
import './less/index.less'
import '@/assets/icons/iconfont.css'

Vue.config.productionTip = false
/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config
Vue.prototype.eventHub = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
