<template>
	<section class="container">
		<figure class="article">
			<div class="inner">
				<router-link to="../article/foo" class="link"></router-link>
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>
		<figure class="article">
			<div class="inner">
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>
		<figure class="article">
			<div class="inner">
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>
		<figure class="article">
			<div class="inner">
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>
		<figure class="article">
			<div class="inner">
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>	
		<figure class="article">
			<div class="inner">
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>
		<figure class="article">
			<div class="inner">
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>
		<figure class="article">
			<div class="inner">
				<img src="./img/a.jpg" alt="">
				<div class="content">
					<h3 class="title">jakslda</h3>
					<p class="description">asdkjadklsj</p>	
				</div>
			</div>
		</figure>		
	</section>
</template>

<script>
import './css/article-list.css'
import '../../lib/js/jquery.min.js';
export default{
	data: function(){
		return {
			url: this.$route.params.article_id
		}
	},
	methods: {
	}
	// watch: {
	// 	"$route": function(to, from){
	// 		$('#aa').html(this.$route.params.article_id);
	// 	}
	// }
}
</script>