'use strict';

// Articles controller
angular.module('couples').controller('CouplesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Couples',
	function ($scope, $stateParams, $location, Authentication, Couples) {
		$scope.authentication = Authentication;

		// Create new Couple
		$scope.create = function (isValid) {
			$scope.error = null;

			if (!isValid) {
				$scope.$broadcast('show-errors-check-validity', 'coupleForm');

				return false;
			}

			// Create new Couple object
			var couple = new Couples({
				hisName: this.hisName,
				herName: this.herName,
				lastName: this.lastName,
				address: this.address,
				city: this.city,
				zip: this.zip,
				state: this.state,
				homePhone: this.homePhone,
				hisCell: this.hisCell,
				herCell: this.herCell,
				primaryEmail: this.primaryEmail,
				secondaryEmail: this.secondaryEmail,
				photo: this.photo,
				isActive: this.isActive
			});

			// Redirect after save
			couple.$save(function (response) {
				$location.path('couples/' + response._id);

				// Clear form fields
				$scope.hisName = '';
				$scope.herName = '';
				$scope.lastName = '';
				$scope.address = '';
				$scope.city = '';
				$scope.zip = '';
				$scope.state = '';
				$scope.homePhone = '';
				$scope.hisCell = '';
				$scope.herCell = '';
				$scope.primaryEmail = '';
				$scope.secondaryEmail = '';
				$scope.photo = '';
				$scope.isActive = '';

			}, function (errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Couple
		$scope.remove = function (couple) {
			if (couple) {
				couple.$remove();

				for (var i in $scope.couples) {
					if ($scope.couples[i] === couple) {
						$scope.couples.splice(i, 1);
					}
				}
			} else {
				$scope.couple.$remove(function () {
					$location.path('couples');
				});
			}
		};

		// Update existing Couple
		$scope.update = function (isValid) {
			$scope.error = null;

			if (!isValid) {
				$scope.$broadcast('show-errors-check-validity', 'articleForm');

				return false;
			}

			var couple = $scope.couple;

			couple.$update(function () {
				$location.path('couples/' + couple._id);
				console.log('1' + couple);
			}, function (errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Articles
		$scope.find = function () {
			$scope.couples = Couples.query();
		};

		// Find existing Couple
		$scope.findOne = function () {
			$scope.couple = Couples.get({
				coupleId: $stateParams.coupleId
			});
		};
	}
]);
