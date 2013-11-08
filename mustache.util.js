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