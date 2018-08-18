/*global $*/
$(function () {
	"use strict"
	$(".information .info-list li").click(function () {
		var mydivclass = $(this).attr("data-value");
		$(this).addClass("activ").siblings("li").removeClass("activ");
		$(".information .info-contant > div").hide();
		$("." + mydivclass).fadeIn(1000);
		
	})
})