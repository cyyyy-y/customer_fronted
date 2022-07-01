import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import router from "./router";
import 'normalize.css/normalize.css';

//引入 echarts
import * as echarts from 'echarts';
//注册组件
Vue.prototype.$echarts = echarts;

// import "echarts-gl";


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
