$(document).ready(function(){

	$(window).scroll(function(){
		if ($(document).scrollTop() > 300 ) {
			$('#box-btn-up').css('bottom','20px');
		} else {
			$('#box-btn-up').css('bottom','-80px');
		};
	});

	$('#box-btn-up').click(function(){
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$("#btn-bars").click(function(){
		$("header").toggleClass("open-menu");
	});

	$("#img-user").click(function(){

		$("html, body").animate({
			scrollTop: $("div.presentation").offset().top
		}, 1000)

	});

	$("#img-user-mobile").click(function(){

		$("html, body").animate({
			scrollTop: $("div.presentation").offset().top
		}, 1000)

		$("header").removeClass("open-menu");

	});

	$("#about").click(function(){

		$('html, body').animate({
			scrollTop: $("div.presentation").offset().top
		}, 1000)

	});

	$("#about-mobile").click(function(){

		$('html, body').animate({
			scrollTop: $("div.presentation").offset().top
		}, 1000)

		$("header").removeClass("open-menu");

	});

	$("#skills").click(function(){

		$('html, body').animate({
			scrollTop: $("div.skills").offset().top
		}, 1000)

	});

	$("#skills-mobile").click(function(){

		$('html, body').animate({
			scrollTop: $("div.skills").offset().top
		}, 1000)

		$("header").removeClass("open-menu");

	});	

	$("#education").click(function(){

		$("html, body").animate({
			scrollTop: $("div.education").offset().top
		}, 1000)

	});

	$("#education-mobile").click(function(){

		$("html, body").animate({
			scrollTop: $("div.education").offset().top
		}, 1000)

		$("header").removeClass("open-menu");

	});

	$("#experience").click(function(){

		$("html, body").animate({
		scrollTop: $("div.experience").offset().top
		}, 1000)

	});

	$("#experience-mobile").click(function(){

		$("html, body").animate({
			scrollTop: $("div.experience").offset().top
		}, 1000)

		$("header").removeClass("open-menu");

	});

	$("#interests").click(function(){

		$("html, body").animate({
			scrollTop: $("div.interests").offset().top
		}, 1000)

	});

	$("#interests-mobile").click(function(){

		$("html, body").animate({
			scrollTop: $("div.interests").offset().top
		}, 1000)

		$("header").removeClass("open-menu");

	});

	$("#menu-mobile-mask").click(function(){

		$('header').removeClass('open-menu');

	});

});