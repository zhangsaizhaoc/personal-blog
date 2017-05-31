const path = require('path');

module.exports = {
	//入口文件
	entry: ['./src/main.js'],
	output: {
		path: path.resolve(__dirname, 'dist'),
		//输出的文件的名字
		filename: 'build.js',
		publicPath: 'dist/'
	},
	//所使用的一些依赖模块
	module: {
		//加载器
		loaders: [
			{test: /\.vue$/, loader: 'vue-loader'},
			{test: /\.css$/, loader: 'style-loader!css-loader'},
			{test: /\.js$/, loader: 'babel-loader'},
			//用来加载图片的
			{test: /\.(jpg|png|jpeg|gif)$/, loader: 'url-loader?limit=8192&name=img/[hash:8].[name].[ext]'}
		]
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.js'
		}
	}
}