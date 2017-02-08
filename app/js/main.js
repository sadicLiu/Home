// import 'babel-polyfill';

'use strict';

(function () {
	const toggleBar = $('#toggleBar');
	const sideBar = $(".site-sidebar");

	toggleBar.on('click', function () {
		// 标识sidebar是否打开的变量
		let openFlag = $(this).data('open');

		// 如果sidebar打开了，让它弹出去再隐藏，同时将×替换成齿轮
		if (openFlag) {
			sideBar.addClass('animated bounceOutRight');

			sideBar.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
				sideBar.removeClass('animated bounceOutRight');
				sideBar.css({'visibility': 'hidden'});
			});

			toggleBar.children('i').removeClass('fa-times-circle-o').addClass('fa-cog fa-spin');
		} else {	// 如果sidebar没打开，进行相反的操作
			sideBar.css({'visibility': 'visible'}).addClass('animated bounceInRight');

			sideBar.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
				sideBar.removeClass('animated bounceInRight');
			});

			toggleBar.children('i').removeClass('fa-cog fa-spin').addClass('fa-times-circle-o');
		}

		// 标识取反
		$(this).data('open', !openFlag);
	});

})();
