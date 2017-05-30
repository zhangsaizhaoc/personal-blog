<template>
	<div>
		<p id="aa">{{url}}</p>		
	</div>
</template>

<script>
import '../../lib/js/jquery.min.js';
export default{
	data: function(){
		return {
			url: this.$route.params.articleName
		}
	},
	methods: {
	},
	watch: {
		"$route": function(to, from){
			$('#aa').html(this.$route.params.articleName);
		}
	}
}
</script>