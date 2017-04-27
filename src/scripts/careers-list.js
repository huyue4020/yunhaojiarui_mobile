var $ = require('./libs/jquery.js');
var str_careers_list = require("./templates/careers-list.string");
var dot = require("./libs/jquery.dotdotdot.min.js");
var hammer = require('./libs/hammer.min.js');

var body = document.body;
body.innerHTML =str_careers_list + body.innerHTML;

window.onload = function(){
	$(".header-box a").eq(1).click(
		function(){
			if($(".menu-list").css("display")=="none"){
				$(".menu-list").show();
				$(".header").css(
					{"backgroundColor":"#ffffff"},
					{"color":"#000000"}
				)
				$(this).css("background","url('../../Application/Mobile/Public/images/icon_close.png') no-repeat center center");
				$(this).siblings('a').css("background","url('../../Application/Mobile/Public/images/logo-black.png') no-repeat center center");

			}else{
				$(".menu-list").hide();
				$(".header").css(
					{"backgroundColor":"rgba(171, 27, 27, 0.8)"},
					{"color":"#ffffff"}
				)
				$(this).css("background","url('../../Application/Mobile/Public/images/icon_menu.png') no-repeat center center");
				$(this).siblings('a').css("background","url('../../Application/Mobile/Public/images/logo.png') no-repeat center center");
			}
		}
	);
	$('.footer-back-top').on('click', function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
};
	