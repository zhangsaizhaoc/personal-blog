import VueRouter from 'vue-router';
import Article from './components/article/article.vue';
import About from './components/about/about.vue'

const routes = [
	{path: '/article/:articleName', name: 'article', component: Article},
	{path: '/about', name:'about', component: About}
];

const router = new VueRouter({
	routes: routes,
	linkActiveClass: 'active'
});

export default router;