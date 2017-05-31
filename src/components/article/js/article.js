export default{
	data: function(){
		return {
			article_id: this.$route.params.article_id
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