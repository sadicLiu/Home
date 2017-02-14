(function (angular) {
	'use strict';
	var technologyModule = angular.module('myShare.TechnologyModule', ['ngRoute']);

	technologyModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/technology', {
			controller: 'TechnologyController',
			templateUrl: 'technology/technology.html'
		});
	}]);

	technologyModule.controller('TechnologyController', ['$scope', function ($scope) {

	}]);

})(angular);
