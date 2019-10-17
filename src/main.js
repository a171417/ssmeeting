// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import state from './state'
import VueState from './plugins/state'
import './global-component'

Vue.config.productionTip = false
//使用state插件
Vue.use(VueState, state)
/* eslint-disable no-new */
async function main() {
  new Vue({
    el: '#app',
    data: state,
    router,
    components: { App },
    template: '<App/>'
    // render: h => h(App)
  })
}
main()
