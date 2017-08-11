### 个人博客
该项目为单页面应用, 是一个用来作为个人博客的项目, 在首页展示文章列表, 点击任意一片文章之后, 进入文章详情页面, 查看文章内容

项目目录如下:  
personal-blog  
dist​
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp; 
-- 打包后自动生成的文件  
node_modules​ 
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp; 
-- 项目依赖模块  
src
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​​&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​			  		
-- 静态资源  
&nbsp;&nbsp;
|--components
​​&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- 项目中用到的组件  
​​​&nbsp;&nbsp;​&nbsp;​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
|-- about		
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;
-- 关于我页面  
​​​&nbsp;&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;&nbsp;&nbsp;
|-- article				
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;​
-- 文章页面  
​​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;&nbsp;&nbsp;
|-- article-list	
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;
-- 用于首页的文章列表  
​​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;&nbsp;&nbsp;
|-- index
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;
-- 首页展示内容  
​&nbsp;​&nbsp;​​
|--lib
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
-- 用到的第三方框架(jQuery等等)  
&nbsp;​&nbsp;​​
|--main.js
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​​
-- webpack打包的入口文件  
&nbsp;​&nbsp;​​
|--routes.js
&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- vue-router路由配置信息  
.babelrc
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;
-- es6编译成es2015用到的配置文件  
gulpfile.js
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​
-- 使用gulp进行处理需要的配置文件  
index.html
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;
-- 首页  
package.json
​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;​&nbsp;
-- 项目信息  
webpack.config.js
​&nbsp;​&nbsp;​&nbsp;
-- webpack打包的相关配置

所用到的技术栈包括:

基本的HTML/CSS/JS, jQuery, gulp, webpack, vue2.0, vue-router