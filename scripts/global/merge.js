/**
 * 公共JS集合
 * @author : panda
 * @createTime : 2012-11-18
 */
(function(){
	ImportJavascript = {
		url:function(url){
			document.write('<script type="text/javascript" src="'+url+'"></scr'+'ipt>');
		}
	};
})();

ImportJavascript.url('../js/base/jquery-1.7.2.min.js');