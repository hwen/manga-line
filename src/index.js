import Vue from 'vue'
import VueRouter from 'vue-router'
import LightTimeline from 'vue-light-timeline'
import logSome from 'sme-log'

import App from './App.vue'
import routes from './routes'

import './normalize.css'

Vue.use(VueRouter)
Vue.use(LightTimeline)

window.logs = logSome(process.env.NODE_ENV)

const router = new VueRouter({
  routes
})

export default new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
