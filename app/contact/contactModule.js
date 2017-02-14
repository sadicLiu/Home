(function (angular) {
	'use strict';
	var contactModule = angular.module('myShare.ContactModule', ['ngRoute']);

	contactModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/contact', {
			controller: 'ContactController',
			templateUrl: 'contact/contact.html'
		});
	}]);

	contactModule.controller('ContactController', ['$scope', function ($scope) {

	}]);

})(angular);
