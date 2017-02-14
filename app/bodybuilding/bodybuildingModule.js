(function (angular) {
	'use strict';
	var bodybuildingModule = angular.module('myShare.BodybuildingModule', ['ngRoute']);

	bodybuildingModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/bodybuilding', {
			controller: 'BodybuildingController',
			templateUrl: 'bodybuilding/bodybuilding.html'
		});
	}]);

	bodybuildingModule.controller('BodybuildingController', ['$scope', function ($scope) {

	}]);

})(angular);
