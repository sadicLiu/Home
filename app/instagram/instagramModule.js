(function (angular) {
	'use strict';
	var instagramModule = angular.module('myShare.InstagramModule', ['ngRoute']);

	instagramModule.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/instagram', {
			controller: 'InstagramController',
			templateUrl: 'instagram/instagram.html'
		});
	}]);

	instagramModule.controller('InstagramController', ['$scope', function ($scope) {

	}]);

})(angular);
