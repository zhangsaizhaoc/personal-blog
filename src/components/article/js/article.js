/* 获取url地址中问号后面的参数部分 */
function getRequest() {
	var url = location.search; //获取url中"?"符后的字串
	var theRequest = {};
	// if (url.indexOf("?") != -1) {
	//    var str = url.substr(1);
	//    var strs = str.split("&");
	//    for(var i = 0; i < strs.length; i ++) {
	//       theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
	//    }
	// }
	// return theRequest;
	return url;
}

export default getRequest;