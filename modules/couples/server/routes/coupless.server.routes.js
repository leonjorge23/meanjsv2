'use strict';

/**
 * Module dependencies.
 */
var couplesPolicy = require('../policies/couples.server.policy.js'),
		couples = require('../controllers/couples.server.controller.js');

module.exports = function (app) {
	// Articles collection routes
	app.route('/api/couples').all(couplesPolicy.isAllowed)
			.get(couples.list)
			.post(couples.create);

	// Single article routes
	app.route('/api/couples/:coupleId').all(couplesPolicy.isAllowed)
			.get(couples.read)
			.put(couples.update)
			.delete(couples.delete);

	// Finish by binding the article middleware
	app.param('coupleId', couples.coupleByID);
};

