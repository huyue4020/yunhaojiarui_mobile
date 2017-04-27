var $ = require('./libs/jquery.js');
var str_index = require("./templates/index.string");
var dot = require("./libs/jquery.dotdotdot.min.js");
var hammer = require('./libs/hammer.min.js');

var body = document.body;
body.innerHTML = str_index + body.innerHTML;

window.onload = function(){
	$(".header-box a").eq(1).click(
		function(){
			if($(".menu-list").css("display")=="none"){
				$(".menu-list").show();
				$(".header").css(
					{"backgroundColor":"#ffffff"},
					{"color":"#000000"}
				)
				$(this).css("background","url('../../../Application/Mobile/Public/images/icon_close.png') no-repeat center center");
				$(this).siblings('a').css("background","url('../../../Application/Mobile/Public/images/logo-black.png') no-repeat center center");
			}else{
				$(".menu-list").hide();
				$(".header").css(
					{"backgroundColor":"rgba(171, 27, 27, 0.8)"},
					{"color":"#ffffff"}
				)
				$(this).css("background","url('../../../Application/Mobile/Public/images/icon_menu.png') no-repeat center center");
				$(this).siblings('a').css("background","url('../../../Application/Mobile/Public/images/logo.png') no-repeat center center");
			}
		}
	);
	var contactScrollTop;
	$('.menu-list ul li').eq(4).on('click', function(){
		contactScrollTop = $('.banner').height() + $('.outline').height() + $('.slogan').height() + $('.business').height() + $('.project').height() + $('.team').height() + $('.careers').height();
		$("html,body").animate({scrollTop:contactScrollTop}, 500);
		$(".menu-list").hide();
		$(".header").css(
			{"backgroundColor":"rgba(171, 27, 27, 0.8)"},
			{"color":"#ffffff"}
		)
		$(".header-box a").eq(1).css("background","url('../../../Application/Mobile/Public/images/logo.png') no-repeat center center");
		$(".header-box a").eq(2).css("background","url('../../../Application/Mobile/Public/images/icon_menu.png') no-repeat center center");
		return false;
	});
};
	