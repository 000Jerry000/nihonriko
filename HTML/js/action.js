var w = $(window).width();
var nowscrollpos = 0;
var oldscrollpos = 0;
var menuscrollpos = 0;
$(window).scroll(function () {
	nowscrollpos = $(window).scrollTop();
});
var navstatus = '';
// 開閉処理
//$('#nav').hide();
$("#menu_btn").click(function () {
	navstatus = $('#menu_btn .menu div').attr('class');
	if(navstatus == 'on'){
		$('body').removeClass('scroll_prevent');
		window.scrollTo(0, menuscrollpos);
		//$('#nav').slideUp('fast');
		$('#nav').hide();
		$('#nav').removeClass('on');
		$('#menu_btn').removeClass('on');
		$('#menu_btn div').removeClass('on');
	}else{
		menuscrollpos = nowscrollpos;
		$('body').addClass('scroll_prevent');
		$('#nav').addClass('on');
		$('#nav').slideDown('fast');
		$('#menu_btn').addClass('on');
		$('#menu_btn div').addClass('on');
	}
});
/*
$('.sp_menu ul li a[href]').on('click', function(event) {
	$('#menu_btn').trigger('click');
});
*/

/*
$(window).scroll(function () {
	if ($(this).scrollTop() > 100) {
		$("#pagetop").fadeIn();
	} else {
		$("#pagetop").fadeOut();
	}
});
*/
$("#pagetop").click(function () {
	$('body,html').animate({
		scrollTop: 0
	}, 500);
	return false;
});
/*
var bodyHeight = document.body.clientHeight;
var windowHeight = $(window).height();
if(bodyHeight >= windowHeight){
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos =  $(this).offset().top;
			var scroll =  $(window).scrollTop();
			var windowHeight2 =  $(window).height();

			if (scroll > elemPos - windowHeight2){
				$(this).addClass('scrollin');
			}
		});
	});
}else{
	$('.fadein').each(function(){
		$(this).addClass('scrollin');
	});
}
*/

var bodyHeight = document.body.clientHeight;
var windowHeight = $(window).height();
if(bodyHeight >= windowHeight){
	$(window).scroll(function (){
		$('.line').each(function(){
			var elemPos =  $(this).offset().top;
			var scroll =  $(window).scrollTop();
			var windowHeight2 =  $(window).height();

			if (scroll > elemPos - windowHeight2){
				$(this).addClass('scrollin');
			}
		});
	});
}else{
	$('.line').each(function(){
		$(this).addClass('scrollin');
	});
}

$(document).on('click', 'a[href*="#"]', function() {
	var target = $(this.hash);
	var speed = 400;
	var adjust = '';
	if( w >= 1024){
		adjust = 0;
	}
	var pos = Math.floor(target.offset().top) + adjust;
	$('html,body').animate({scrollTop:pos}, speed, 'swing');
	return false;
});

/*
$('.nav ul.main_nav li.has_sub').click(function(){
	if($(".sub_area",this).css("display")=="none"){
		//$(".sub_area",this).slideDown('fast');
		//$("+.sub_area",this).animate({'opacity' : '1'}, 300);
		$('.nav ul.main_nav li.has_sub.open').removeClass('open');
		$(this).addClass('open');
	}else{
		//$(".sub_area",this).slideUp("fast");
		//$(".sub_area",this).hide();
		$(this).removeClass('open');
	}
});
$('#main').on('click', function(event) {
	$('.nav ul.main_nav li.has_sub.open').removeClass('open');
});

$(document).on('click', function(e) {
	if(!$(e.target).closest('#sidebar .nav ul.main_nav').length) {
		$('.nav ul.main_nav li.has_sub.open').removeClass('open');
	}
});
*/
/*
$('#header .h_nav .btn').hover(function () {
	$(this).find('.sub_area').removeClass('hide');
},function(){
	$('#header .h_nav .btn .sub_area').addClass('hide');
});
*/


if( w >= 959){

	$('.nav ul.main_nav li.has_sub').click(function(){
		$(this).toggleClass("open");
	});
	
	$('.nav ul.main_nav li.has_sub').hover(
		function() {
			$(this).addClass('open');
		},
		function() {
			$(this).removeClass('open');
		}
	);
}else{
	//$(".sub_area").hide();
	$('.nav ul.main_nav li.has_sub').click(function(){
		//$(this).toggleClass("open");
		if($(".sub_area",this).css("display")=="none"){
			//$(".sub_area",this).slideDown('fast');
			//$("+.sub_area",this).animate({'opacity' : '1'}, 300);
			$(this).addClass('open');
		}else{
			//$(".sub_area",this).slideUp("fast");
			//$(".sub_area",this).hide();
			$(this).removeClass('open');
		}
	});
}
