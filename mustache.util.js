/*
 * Type    : Utility
 * Name    : MustacheUtility
 * Author  : DeliPenguen - Egemen MEDE
 * Date    : 09.11.2013
 * Time    : 00:10
 * Web     : http://www.delipenguen.com
 * Version : 1.0
 */

mt = function(){
    function mustacheExternalTemplate(templateName, jsonPath, htmlElement){
		$.ajax({
			url: templateName, dataType: "html",
			success: function(templateData) {
				$.ajax({
					url: jsonPath, dataType: "json",
					success: function(jsonData) {
						$(htmlElement).html(Mustache.to_html(templateData, jsonData));                              
					}
				});
			}
		});
	}
    return{ view: mustacheExternalTemplate }
}();