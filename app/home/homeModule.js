(function (angular) {
	'use strict';
	var homeModule = angular.module('myShare.HomeModule', ['ngRoute']);

	homeModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/home', {
			controller: 'HomeController',
			templateUrl: 'home/home.html'
		});
	}]);

	homeModule.controller('HomeController', ['$scope', function ($scope) {

	}]);

})(angular);
