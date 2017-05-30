<template>
	<div>
		<header id="header">
			<div class="header-bg">
				<div class="header-container">
					<div class="logo"></div>
					<ul class="nav">
						<router-link tag="li" to="/article/foo">
							<a>首页</a>
						</router-link>
						<router-link tag="li" to="/article/bar">
							<a>文章</a>
						</router-link>
						<router-link tag="li" to="/about">
							<a>关于我</a>
						</router-link>
					</ul>
				</div>	
			</div>
			<div class="introduce">
				<h1 class="blog-name">Encorehwang的博客</h1>
				<div class="detail">
					永无止境的学习
				</div>
			</div>
		</header>

		<router-view></router-view>

		<footer id="footer">
			由Encorehwang制作并发布
		</footer>
	</div>
</template>

<script>
	/* CSS部分 */
	import './css/index.css';
	/* JS部分 */
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	Vue.use(VueRouter);

	export default{}
</script>