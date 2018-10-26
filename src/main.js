import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'
import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import "./assets/styles/iconfont.css"
import Mint from 'mint-ui'
import "mint-ui/lib/style.css"
import "./lib/mui/css/mui.css"
import "./lib/mui/css/icons-extra.css"
import VueResource from 'vue-resource'

//将VueResource注册vue
Vue.use(VueResource);
//设置请求根路径
Vue.http.options.root="http://127.0.0.1:3000/";

Vue.use(Mint)

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
