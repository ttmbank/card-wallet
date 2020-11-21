/* ==========================================================================
 Card Flip
 ========================================================================== */

$(window).on('load', function () {

	$('.scr-main').addClass('animated');

	var i = 0,
			totalSlides = 19,
			s = 45;

	function myInterval(){
		var count = i;

		if (i < 10) count = '0' + i;

		if (i === totalSlides) i = 0;
		else i++;

		$('.scr-main__card').attr("src", "/_asset/img/card_flip/ttmcard_000" + count + ".jpg");

		if(i === 11 || i === 1) s = 1500;
		else s = 45;

		setTimeout(myInterval, s);
	}
	setTimeout(myInterval ,s);

});


$(document).ready(function(){

	/* ==========================================================================
	 One page Scroll
	 ========================================================================== */

	var onePage = $(".one-page"),
		onePageFlag = true;

	function onepageFunc() {

		if ( $(window).width() >= 999 ) {

			if ( onePageFlag ) {

				onePage.onepage_scroll({
					sectionContainer: ".scr",     // sectionContainer accepts any kind of selector in case you don't want to use section
					easing: "ease",                  // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
				                                     // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
					animationTime: 1000,             // AnimationTime let you define how long each section takes to animate
					pagination: true,                // You can either show or hide the pagination. Toggle true for show, false for hide.
					updateURL: false,                // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
					beforeMove: function(index) { },  // This option accepts a callback function. The function will be called before the page moves.
					afterMove: function(index) { },   // This option accepts a callback function. The function will be called after the page moves.
					loop: false,                     // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
					keyboard: true,                  // You can activate the keyboard controls
					responsiveFallback: 1000,        // You can fallback to normal page scroll by defining the width of the browser in which
					// you want the responsive fallback to be triggered. For example, set this to 600 and whenever
					// the browser's width is less than 600, the fallback will kick in.
					direction: "vertical"            // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
				});

				onePageFlag = false;
			}

		}
	}

	onepageFunc();

	$(window).resize(function(){
		onepageFunc();
	});


	/* ==========================================================================
	 Page Nav
	 ========================================================================== */

	$('.js-to-screen').each(function(){
		var item = $(this),
			link = item.attr('href'),
			scr = $(link),
			scrIndex = scr.index();

		item.click(function(e){
			e.preventDefault();

			if ( $(window).width() >= 999 ) {

				onePage.moveTo(scrIndex+1);

			} else {
				$('body,html').scrollTop( scr.offset().top );
			}

			if ( $('body').hasClass('menu-opened') ) {
				$('.burger').removeClass('is-active');
				$('body').removeClass('menu-opened');
			}
		});
	});


	if ( $(window).width() >= 999 ) {

		// Ссылки на экраны
		//console.log(window.location.hash);
		if ( window.location.hash == '#main' ) {
			$(".wrapper").moveTo(1);
		}
		if ( window.location.hash == '#eco' ) {
			$(".wrapper").moveTo(2);
		}
		if ( window.location.hash == '#ships' ) {
			$(".wrapper").moveTo(3);
		}
		if ( window.location.hash == '#astro' ) {
			$(".wrapper").moveTo(4);
		}
		if ( window.location.hash == '#social' ) {
			$(".wrapper").moveTo(5);
		}
		if ( window.location.hash == '#neural' ) {
			$(".wrapper").moveTo(6);
		}
		if ( window.location.hash == '#referral' ) {
			$(".wrapper").moveTo(7);
		}
		if ( window.location.hash == '#join' ) {
			$(".wrapper").moveTo(8);
		}

	}


	/* ==========================================================================
	 Screen animated
	 ========================================================================== */

	$('.scr').not('.scr-main').each(function(){
		scrollAnim($(this), $(this), winHeight*.25, true);
	});


	/* ==========================================================================
	 Technology
	 ========================================================================== */

	mouseParallaxAll($('.scr-tech__ice'),50,50);

	mouseParallaxAll($('.scr-tech__snowball_left'),100,100);
	mouseParallaxAll($('.scr-tech__card'),60,60);
	mouseParallaxAll($('.scr-tech__snowball_right'),30,30);

	mouseParallax($('.scr-tech__blizzard'), 20, 20);


	/* ==========================================================================
	 Design Slider
	 ========================================================================== */

	var sliderProgress = $('.scr-des__progress');

	var sliderDesign = new Swiper('.scr-des__slider', {
		speed: 1000,
		spaceBetween: 0,
		slidesPerView: 1,
		loop: false,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		on: {
			transitionStart: function() {
				sliderProgress.removeClass('is-process');
			},
			transitionEnd: function() {
				sliderProgress.addClass('is-process');
			},
		}
	});


	/* ==========================================================================
	 Buy Now
	 ========================================================================== */

	mouseParallaxAll($('.scr-buy__card_black'),100,100);
	mouseParallaxAll($('.scr-buy__card_red'),50,50);


	/*  ========================================================================== */

});









