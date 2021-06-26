$(document).ready(function(){
	$('.navbar-toggler-icon').click(function(){
		$('.navbar-nav').css('background','#eee');
	});

	$('.navbar-brand').click(function(){
		// var brand = $('.navbar-brand').text();
		// $('.name').text( brand );
		// $('body').css('background', 'red');

		// $('.name').css({
		// 	'background': 'blue',
		// 	'color': 'white'
		// });
	});

	$('.header-box').mouseenter(function(){
		$('.header-box').css({
			'background':'blue',
			'marginLeft': 50
		});
	});
	$('.header-box').mouseleave(function(){
		$('.header-box').css({
			'background':'black',
			'marginLeft': 0

		});
	});


	// var bg = $('.header-box');
	// $('.header-box').mouseenter(function(){
	// 	bg.css('background', '#ddd');
	// });

	$('.notlp').click(function(){
		// console.log('document.location=www.facebook.com');
		// console.log('ok');
		window.location='www.facebook.com';

	});
	
	
});


