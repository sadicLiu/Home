(function (angular) {
	'use strict';
	var aboutModule = angular.module('myShare.AboutModule', ['ngRoute']);

	aboutModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/about', {
			controller: 'AboutController',
			templateUrl: 'about_me/about.html'
		});
	}]);

	aboutModule.controller('AboutController', ['$scope', function ($scope) {

	}]);

})(angular);
