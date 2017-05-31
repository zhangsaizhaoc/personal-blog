import Vue from 'vue';
//引入index.vue
import App from './components/index/index.vue';
//引入路由配置文件
import router from './routes.js';

//创建Vue实例
var vm = new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
});