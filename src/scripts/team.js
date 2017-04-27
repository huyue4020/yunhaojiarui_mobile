var $ = require('./libs/jquery.js');
var str_team = require("./templates/team.string");
var dot = require("./libs/jquery.dotdotdot.min.js");
var hammer = require('./libs/hammer.min.js');

var body = document.body;
body.innerHTML =str_team + body.innerHTML;

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
				$(this).siblings('a').css("color","#000000");
				$(this).siblings('a').css("background","url('../../images/project/btn-back2.png') no-repeat center left");
			}else{
				$(".menu-list").hide();
				$(".header").css(
					{"backgroundColor":"rgba(171, 27, 27, 0.8)"},
					{"color":"#ffffff"}
				)
				$(this).css("background","url('../../Application/Mobile/Public/images/icon_menu.png') no-repeat center center");
				$(this).siblings('a').css("color","#ffffff");
				$(this).siblings('a').css("background","url('../../images/project/btn-back.png') no-repeat center left");
			}
		}
	);
	$('.footer-back-top').on('click', function(){
		$("html,body").animate({scrollTop:0}, 500);
	});
};
	