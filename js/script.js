$(document).ready(function(){

	$("#btn-bars").click(function(){
		$("header").toggleClass("open-menu");
	});

	$("#img-user").click(function(){

		$("html, body").animate({
			scrollTop: $("div.presentation").offset().top
		}, 1000)

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

});