// Invoke 'strict' JavaScript mode
'use strict';

var mongoose = require('mongoose'),
		Couple = mongoose.model('Couple');

var getErrorMessage = function (err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

exports.create = function (req, res) {
	var couple = new Couple(req.body);


	couple.save(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(couple);
		}
	});
};

exports.list = function (req, res) {
	Couple.find(function (err, couples) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(couples);
		}
	});
};

exports.read = function (req, res) {
	res.json(req.couple);
};

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
				message: getErrorMessage(err)
			});
		} else {
			res.json(couple);
		}
	});
};

exports.delete = function (req, res) {
	var couple = req.couple;

	couple.remove(function (err) {
		if (err) {
			return res.status(400).send({
				message: getErrorMessage(err)
			});
		} else {
			res.json(couple);
		}
	});
};

exports.coupleByID = function (req, res, next, id) {
	Couple.findById(id, function (err, couple) {
		if (err) return next(err);
		if (!couple) return next(new Error('Failed to find couple ' + id));
		req.couple = couple;
		next();
	});
};

exports.requiresLogin = function (req, res, next) {
	if (!req.isAuthenticated()) {
		return res.status(401).send({
			message: 'User is not logged in'
		});
	}

	next();
};

exports.hasAuthorization = function (req, res, next) {
	console.log('userid: ' + req.user.id);
	if (0 !== 0) { // Todo ->> Fix this later
		return res.status(403).send({
			message: 'User is not authorized'
		});
	}
	next();
};
