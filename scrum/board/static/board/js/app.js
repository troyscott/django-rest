var app = (function($) {
	var config = $('#config'),
		app = JSON.parse(config.text());
	console.log(app);

	// Make sure the router does not intialize before the 
	// DOM is finished loading
	$(document).ready(function () {
		var router = new app.router();
	});
	
	return app;
	
})(jQuery);

