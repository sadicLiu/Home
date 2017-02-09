(function (angular) {
	'use strict';

	var myShare = angular.module('myShare', ['ngRoute', 'myShare.homeModule']);

	myShare.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/in_theaters/1'});
	}]);

	/*
	 * 为每个category注册事件
	 * */
	/*$.each($(".category"), function (index, element) {
	 var $category = $(element);
	 var $box = $category.children('.box');
	 $category.on('mouseenter', function () {
	 $box.addClass('animated pulse');
	 }).on('mouseleave', function () {
	 $box.removeClass('animated pulse');
	 });
	 });*/
})(angular);
