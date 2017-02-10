(function (angular) {
	'use strict';

	var myShare = angular.module('myShare', ['ngRoute', 'myShare.HomeModule']);

	myShare.config(['$routeProvider', function ($routeProvider) {
		// 默认情况下直接跳转到首页
		$routeProvider.otherwise({redirectTo: '/home'});
	}]);

	myShare.controller('MainController', ['$scope', function () {

	}]);

})(angular);
