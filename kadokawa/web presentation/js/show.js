$(document).ready(function() {
   	$('.ui-slick-main').slick({
        infinite: true,
        dots: true,            /*指示点*/
        slidesToShow: 2,       /*每屏显示个数*/
        slidesToScroll: 1,     /*每次滑动个数*/
        autoplay: true,        /*自动播放*/ 
        autoplaySpeed: 2000,   /*自动播放间隔*/
    });

});

$(".view-increase a").on('click', function () {
	if ($(this).parent().prev().hasClass('hide')) {
		$(this).parent().prev().removeClass().addClass('active');
		$(this).text('-表示を減らす');
		document.getElementById("ui-leftbody").style.height="557px";
		document.getElementById("ui-leftbody-item2").style.height="557px";
	} else {
		$(this).parent().prev().removeClass().addClass('hide');
		$(this).text('+表示を増やす');
		document.getElementById("ui-leftbody").style.height="402px";
		document.getElementById("ui-leftbody-item2").style.height="4020px";
	}
	return false;
});

