// 消除点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)

import Vue from 'vue'
import App from './App'

//============================================= 插件 ===================================
import ToastPlugin from './plugins/toast'
import AlertPlugin from './plugins/alert'
import Device from './plugins/device'

Vue.use(Device)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

//============================================= 路由 ===================================
import router from './routers/router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//时间格式化
Vue.filter('time', timestamp => {
  return new Date(timestamp).toLocaleTimeString()
})


import { sync } from 'vuex-router-sync'
import store from './vuex/store'

let history = window.sessionStorage
history.clear()
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)

const commit = store.commit || store.dispatch
router.beforeEach((to, from, next) => {
  const toIndex = history.getItem(to.path)
  const fromIndex = history.getItem(from.path)
  if (toIndex) {
    if (toIndex > fromIndex || !fromIndex) {
      commit('UPDATE_DIRECTION', 'forward')
    } else {
      commit('UPDATE_DIRECTION', 'reverse')
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    commit('UPDATE_DIRECTION', 'forward')
  }
  commit('UPDATE_LOADING', true)
  setTimeout(next, 50)
})
router.afterEach(() => {
  commit('UPDATE_LOADING', false)
})

sync(store, router)


// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach((to, from, next) => {
  if (to.fullPath !== '/demo') {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
  }
  if (/\/http/.test(to.path)) {
    let url = to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/demo\/component\/\w+/.test(to.path)) {
      router.go({
        replace: true,
        path: to.path.replace('/demo', ''),
        append: false
      })
    } else {
      next()
    }
  }
})

router.afterEach((to, from, next) => {
  if (to.path !== '/demo') {
    window.scrollTo(0, 0)
  } else {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
    // if from component page
    if (demoScrollTop && /component/.test(from.path)) {
      setTimeout(function () {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout(function () {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})



Vue.config.devtools = true
new Vue({
	router,
	store,
    el: '#app',
    test:"test",
    template: '<App/>',
    components: { App }
})
