import Vue from 'vue'
import App from './App.vue'
import {
  http
} from '@/services/config'
import './registerServiceWorker'
import router from './router'
import store from './store'
import {
  BootstrapVue,
  IconsPlugin
} from 'bootstrap-vue'

import './assets/scss/style.scss'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

http.interceptors.request.use(config => {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
})

http.interceptors.response.use(res => res, error => {
  if (error.response.status === 403) {
    router.push('/login')
  } else if (error.response.status === 401) {
    store.commit('logout')
    router.push('/login').catch(() => {})
  }
  throw error
})


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')