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

ImportJavascript.url('../scripts/base/jquery-1.7.2.min.js');
ImportJavascript.url('../scripts/module/imitate-checkbox.js');
ImportJavascript.url('../scripts/module/tip.js');
ImportJavascript.url('../scripts/module/placeholder.js');