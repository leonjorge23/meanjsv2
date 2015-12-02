'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var WeekendSchema = new Schema({
	weekendName: {
		type: String,
		required: "Please Add Weekend Name"
	},
	team: {
		type: String
	},
	role: {
		type: String
	},
	speaker: {
		isSpeaker: {
			type: Boolean,
			default: false
		},
		talk: {type: String}
	}
});

var CoupleSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	hisName: {
		type: String,
		default: '',
		trim: true,
		required: 'His name cannot be blank'
	},
	herName: {
		type: String,
		default: '',
		trim: true,
		required: 'Her name cannot be blank'
	},
	lastName: {
		type: String,
		default: '',
		trim: true,
		required: 'Last name cannot be blank'
	},
	address: {
		type: String,
		default: '',
		trim: true
	},
	city: {
		type: String,
		default: '',
		trim: true
	},
	zip: {
		type: Number,
		default: '',
		trim: true
	},
	state: {
		type: String,
		default: '',
		trim: true
	},
	homePhone: {
		type: String,
		default: '',
		trim: true
	},
	hisCell: {
		type: String,
		default: '',
		trim: true
	},
	herCell: {
		type: String,
		default: '',
		trim: true
	},
	primaryEmail: {
		type: String,
		default: '',
		trim: true
	},
	secondaryEmail: {
		type: String,
		default: '',
		trim: true
	},
	photo: {
		type: String,
		default: '',
		trim: true
	},
	isActive: {
		type: Boolean,
		default: "Active",
		enum: ["Active", "Inactive"]
	},
	weekends: [WeekendSchema]
});


mongoose.model('Couple', CoupleSchema);
