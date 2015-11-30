'use strict';

// Setting up route
angular.module('couples').config(['$stateProvider',
	function ($stateProvider) {
		// Articles state routing
		$stateProvider
				.state('couples', {
					abstract: true,
					url: '/couples',
					template: '<ui-view/>'
				})
				.state('couples.list', {
					url: '',
					templateUrl: 'modules/couples/client/views/list-couples.client.view.html'
				})
				.state('couples.create', {
					url: '/create',
					templateUrl: 'modules/couples/client/views/create-couple.client.view.html',
					data: {
						roles: ['user', 'admin']
					}
				})
				.state('couples.view', {
					url: '/:coupleID',
					templateUrl: 'modules/couples/client/views/view-couple.client.view.html'
				})
				.state('couples.edit', {
					url: '/:coupleID/edit',
					templateUrl: 'modules/couples/client/views/edit-couple.client.view.html',
					data: {
						roles: ['user', 'admin']
					}
				});
	}
]);
