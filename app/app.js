(function (angular) {
	'use strict';

	var myShare = angular.module(
		'myShare',
		['ngRoute',
			'ngAnimate',
			'myShare.HomeModule',
			'myShare.AboutModule',
			'myShare.BodybuildingModule',
			'myShare.InstagramModule',
			'myShare.TechnologyModule',
			'myShare.ContactModule']
	);

	myShare.config(['$routeProvider', '$animateProvider', function ($routeProvider, $animateProvider) {
		// 默认情况下直接跳转到首页
		$routeProvider.otherwise({redirectTo: '/home'});

		// 如果要禁用那些不需要在加载页面时就出现的动画效果，加快页面渲染速度
		// 可以按下面的做法
		// $animateProvider.classNameFilter(/rotateFall/);
	}]);

})(angular);
