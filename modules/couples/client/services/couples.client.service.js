'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('couples').factory('Couples', ['$resource',
	function ($resource) {
		return $resource('api/couples/:coupleId', {
			coupleId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
