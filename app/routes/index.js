'use strict';

var path = process.cwd();
var DateHandler = require(path + '/app/controllers/dateHandler.server.js');

module.exports = function (app, passport) {

	var dateHandler = new DateHandler();

	app.route('/')
		.get(function(req, res) {
			res.sendFile(path + '/public/index.html');
		});
		
	app.route('/:date')
		.get(dateHandler.getDate);
};
