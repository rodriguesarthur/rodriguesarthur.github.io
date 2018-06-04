$(document).ready(function(){

	$(window).scroll(function(){
		if ($(document).scrollTop() > 300 ) {
			$('#box-btn-up').css('bottom','20px');
		} else {
			$('#box-btn-up').css('bottom','-80px');
		};
	});

	$('.tool-tip').tooltip('enable');

	$("#btn-bars").click(function(){
		$("header").toggleClass("open-menu");
	});

	$('#box-btn-up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$(".go-up").click(function(){

		$('html, body').animate({
			scrollTop: $("div.presentation").offset().top
		}, 1000);

		$("header").removeClass("open-menu");
	});

	$(".go-skills").click(function(){

		$('html, body').animate({
			scrollTop: $("div.skills").offset().top
		}, 1000);

		$("header").removeClass("open-menu");
	});


	$(".go-education").click(function(){

		$("html, body").animate({
			scrollTop: $("div.education").offset().top
		}, 1000);

		$("header").removeClass("open-menu");
	});


	$(".go-experience").click(function(){

		$("html, body").animate({
		scrollTop: $("div.experience").offset().top
		}, 1000);

		$("header").removeClass("open-menu");
	});


	$(".go-interests").click(function(){

		$("html, body").animate({
			scrollTop: $("div.interests").offset().top
		}, 1000);

		$("header").removeClass("open-menu");
	});


	$("#menu-mobile-mask").click(function(){

		$('header').removeClass('open-menu');

	});

});