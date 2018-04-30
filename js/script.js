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

});