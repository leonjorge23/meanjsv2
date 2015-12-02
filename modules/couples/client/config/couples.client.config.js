'use strict';

// Configuring the Couples module
angular.module('couples').run(['Menus',
	function (Menus) {
		// Add the articles dropdown item
		Menus.addMenuItem('topbar', {
			title: 'Couples',
			state: 'couples',
			type: 'dropdown',
			roles: ['*']
		});

		// Add the dropdown list item
		Menus.addSubMenuItem('topbar', 'couples', {
			title: 'List Couples',
			state: 'couples.list'
		});

		// Add the dropdown create item
		Menus.addSubMenuItem('topbar', 'couples', {
			title: 'Add New Couple',
			state: 'couples.create',
			roles: ['user', 'admin']
		});
	}
]);
