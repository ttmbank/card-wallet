/* ==========================================================================
 Preloader
 ========================================================================== */

$(window).on('load', function () {
	$('body').delay(100).addClass('loaded');
});


$(document).ready(function(){


	/* ==========================================================================
	 Hamburger Menu
	 ========================================================================== */

	var burger = $('.burger');

	burger.click(function(){
		var burger = $(this),
			classAct = 'is-active',
			classOpn = 'menu-opened';

		if ( !burger.hasClass(classAct) ) {
			// burger.addClass(classAct);
			$('body').addClass(classOpn);
		} else {
			// burger.removeClass(classAct);
			$('body').removeClass(classOpn)
		}
	});


	/* ==========================================================================
	 Dropdown
	 ========================================================================== */

	$('.lang').each(function(){
		var parent = $(this),
				popup = parent.find('.lang__dropdown'),
				btnOpen = parent.find('.lang__head'),
				btnClose = parent.find('.js-dd-close'),
				classOpen = 'is-opened',
				link = popup.find('a');

		btnOpen.click(function(e){
			e.preventDefault();

			if (popup.is(':hidden')) {
				popup.show();
				parent.addClass(classOpen);
			} else {
				popup.hide();
				parent.removeClass(classOpen);
			}
		});

		btnClose.click(function(){
			popup.hide();
			parent.removeClass(classOpen);
		});

		$('html').click(function(event) {
			if (
					!$(event.target).closest(popup).length
					&&
					!$(event.target).is(popup)
					&&
					!$(event.target).closest(btnOpen).length
					&&
					!$(event.target).is(btnOpen)
			) {
				popup.hide();
				parent.removeClass(classOpen);
			}
		});
	});


	/* ==========================================================================
	 Scroll To
	 ========================================================================== */

	function convertPlus (item) {
		if ( item < 0 ) {
			return item*(-1);
		} else {
			return item;
		}
	}

	$('.js-to').click(function(e){
		e.preventDefault();

		var link = $(this),
			target = $(this).data('target'),
			href = $(this).attr('href');

		if ( typeof href !== typeof undefined && href !== false ) {
			target = href;
		}

		if ( $('body').hasClass('menu-opened') ) {
			$('.burger').removeClass('is-active');
			$('body').removeClass('menu-opened');
		}

		// $('body,html').animate({
		// 	scrollTop: $(target).offset().top
		// }, ((convertPlus($(target).offset().top - link.offset().top))/$(document).outerHeight() * 4000), 'linear');

		$('body,html').scrollTop( $(target).offset().top );

	});


	/* ==========================================================================
	 Modal
	 ========================================================================== */

	// get scrollbar width
	function getScrollBarWidth () {
		var $outer = $('<div>').css({visibility: 'hidden', width: 100, overflow: 'scroll'}).appendTo('body'),
				widthWithScroll = $('<div>').css({width: '100%'}).appendTo($outer).outerWidth();
		$outer.remove();
		return 100 - widthWithScroll;
	}

	var scrollbarWidth = getScrollBarWidth();

	$('.js-modal').each(function(){
		var link = $(this),
				target = $(link.data('target')),
				btnClose = target.find('.js-modal-close'),
				bodyClass = 'modal-opened',
				modalClass = 'opened';

		link.click(function(e){
			e.preventDefault();

			$('body').addClass(bodyClass);
			// $('body').css('margin-right', scrollbarWidth);
			target.addClass(modalClass);
		});

		btnClose.click(function(e){
			e.preventDefault();

			$('body').removeClass(bodyClass);
			// $('body').css('margin-right', 0);
			target.removeClass(modalClass);

			target.find('form').trigger("reset");
		});
	});

	/*  ========================================================================== */

});


/* ==========================================================================
 Functions
 ========================================================================== */

var winHeight = $(window).height();

function scrollAnim(target, trigger, offset, reverse) {
	if ( target.length > 0 ) {
		$(window).scroll(function(){
			if ($(window).scrollTop() > trigger.offset().top - $(window).height() + offset) {
				target.addClass('animated');
			} else {
				if ( reverse ) {
					target.removeClass('animated');
				}
			}
		});
	}
}

function scrollParallax(obj, parent, ratio) {
	$(document).on('scroll', function() {
		obj.css('margin-top', ($(document).scrollTop() - parent.offset().top)/ratio + 'px');
	});
}

function mouseParallax(obj,x,y) {
	if ( $(window).width() >= 999 ) {
		$('body').mousemove(function(e) {
			obj.css({
				// 'margin-top': e.pageY/y + 'px ',
				'margin-left': e.pageX/x + 'px'
			});
		});
	}
}

function mouseParallaxAll(obj,x,y) {
	if ( $(window).width() >= 999 ) {
		$('body').mousemove(function(e) {
			obj.css({
				'margin-top': e.pageY/y + 'px ',
				'margin-left': e.pageX/x + 'px'
			});
		});
	}
}









