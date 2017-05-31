import VueRouter from 'vue-router';
import Article from './components/article/article.vue';
import ArticleList from './components/article-list/article-list.vue';
import About from './components/about/about.vue';
import path from 'path';

const routes = [
	{path: '/', name: 'index', component: ArticleList},
	{path: '/article/:article_id', name: 'article', component: Article},
	{path: '/article-list', name: 'article-list', component: ArticleList},
	{path: '/about', name:'about', component: About}
];

const router = new VueRouter({
	routes: routes,
	linkActiveClass: 'active'
});

export default router;