// 入口文件

import Vue from 'vue'
//APP组件，它是所有组件的父组件
import App from './App.vue'
//element-ui 引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入VueRouter
import VueRouter from 'vue-router';
//引入路由
import router from './router/index';

//引入axios
// import axios from 'axios'

//应用element-ui
Vue.use(ElementUI);

//应用路由
Vue.use(VueRouter);

//关闭提示
Vue.config.productionTip = false;

// 创建vm实例对象
new Vue({
  // 将APP组件放入容器中
  render: h => h(App),
  // render为一个function
  // render(createElement){return createElement('h1','hello!')}
  // 生命周期钩子
  beforeCreate(){
    // 全局事件总线
    Vue.prototype.$bus = this;
  },
  router:router,
}).$mount('#app')
