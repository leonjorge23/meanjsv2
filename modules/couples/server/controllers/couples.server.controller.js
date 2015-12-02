// Invoke 'strict' JavaScript mode
'use strict';

var path = require('path'),
		mongoose = require('mongoose'),
		Couple = mongoose.model('Couple'),
errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));


/**
 * Create a article
 */
exports.create = function (req, res) {
	var couple = new Couple(req.body);


	couple.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(couple);
		}
	});
};

/**
 * Show the current article
 */
exports.read = function (req, res) {
	res.json(req.couple);
};

/**
 * Update a article
 */
exports.update = function (req, res) {
	var couple = req.couple;

	couple.hisName = req.body.hisName;
	couple.herName = req.body.herName;
	couple.lastName = req.body.lastName;
	couple.address = req.body.address;
	couple.city = req.body.city;
	couple.state = req.body.state;
	couple.homePhone = req.body.homePhone;
	couple.hisCell = req.body.hisCell;
	couple.herCell = req.body.herCell;
	couple.primaryEmail = req.body.primaryEmail;
	couple.secondaryEmail = req.body.secondaryEmail;
	couple.photo = req.body.photo;
	couple.isActive = req.body.isActive;

	couple.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(couple);
		}
	});
};

/**
 * Delete an article
 */

exports.delete = function (req, res) {
	var couple = req.couple;

	couple.remove(function (err) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(couple);
		}
	});
};

/**
 * List of Articles
 */
exports.list = function (req, res) {
	Couple.find().exec(function (err, couples) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			res.json(couples);
		}
	});
};

/**
 * Article middleware
 */
exports.coupleByID = function (req, res, next, id) {

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(400).send({
			message: 'Couple Not found err:100a'
		});
	}

	Couple.findById(id).exec(function (err, couple) {
		if (err) {
			return next(err);
		} else if (!couple) {
			return res.status(404).send({
				message: 'No couple with that identifier has been found'
			});
		}
		req.couple = couple;
		console.log('2' + couple);
		next();
	});
};
