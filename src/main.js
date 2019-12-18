// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'element-ui/lib/theme-chalk/index.css'

import './style/index.css'
import './style/pages.css'
import './style/element.css'
import ElementUI from 'element-ui'
import mock from './mock/mock'
import Axios from 'axios';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = Axios;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
