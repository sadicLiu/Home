
'use strict';

(function () {

	/*
	 * 为每个category注册事件
	 * */
	$.each($(".category"), function (index, element) {
		let $category = $(element);
		let $box = $category.children('.box');
		$category.on('mouseenter', function () {
			$box.addClass('animated pulse');
		}).on('mouseleave', function () {
			$box.removeClass('animated pulse');
		});
	});
})();
