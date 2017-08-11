### 个人博客
该项目为单页面应用, 是一个用来作为个人博客的项目, 在首页展示文章列表, 点击任意一片文章之后, 进入文章详情页面, 查看文章内容

项目目录如下:
personal-blog
dist		                  		-- 打包后自动生成的文件
node_modules       		-- 项目依赖模块
src				  		-- 静态资源
|--components			-- 项目中用到的组件
​        |-- about				-- 关于我页面
​        |-- article				-- 文章页面
​        |-- article-list				--用于首页的文章列表
​        |-- index					--首页展示内容
|--lib			  		-- 用到的第三方框架
.babelrc					-- es6编译成es2015用到的配置文件
gulpfile.js				-- 使用gulp进行处理需要的配置文件
index.html	  			-- 首页
package.json				-- 项目信息
webpack.config.js		-- webpack打包的相关配置

所用到的技术栈包括:

基本的HTML/CSS/JS, jQuery, gulp, webpack, vue.js2.0