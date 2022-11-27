$(window).load(function () {

	/*----------------------------
		Anchor link
	----------------------------*/
	$('nav a[href*=#],.pagetop a[href*=#]').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length && target;
			if (target.length) {
				var sclpos = 30;
				var scldurat = 600;
				var targetOffset = target.offset().top - sclpos;
				$('html,body').animate({ scrollTop: targetOffset }, { duration: scldurat, easing: "easeInOutCubic" });
				return false;
			}
		}
	});

	/*----------------------------
		Video loading
	----------------------------*/

	window.addEventListener('load', videoScroll);
	window.addEventListener('scroll', videoScroll);

	function videoScroll() {

		if (document.querySelectorAll('video[autoplay]').length > 0) {
			var windowHeight = window.innerHeight,
				videoEl = document.querySelectorAll('video[autoplay]');

			for (var i = 0; i < videoEl.length; i++) {

				var thisVideoEl = videoEl[i],
					videoHeight = thisVideoEl.clientHeight,
					videoClientRect = thisVideoEl.getBoundingClientRect().top;

				if (videoClientRect <= ((windowHeight) - (videoHeight * .5)) && videoClientRect >= (0 - (videoHeight * .5))) {
					thisVideoEl.play();
				} else {
					thisVideoEl.pause();
				}

			}
		}

	}

	/*----------------------------
		Slider
	----------------------------*/

	$(document).ready(function () {
		$('.p-index__montessori__slider-l ul').slick({ //{}を入れる
			autoplay: true,
			slidesToShow: 1,
			prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_01.svg" class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_01.svg" class="slide-arrow prev-arrow"></button>',
			autoplaySpeed: 6000,
			dots: true,
			responsive: [{
				breakpoint: 920,
				settings: {
					slidesToShow: 1,
				}
			}]
		});
	});

	$(document).ready(function () {
		$('.p-index__course ul').slick({ //{}を入れる
			autoplay: true,
			slidesToShow: 1,
			prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_02.svg" class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_02.svg" class="slide-arrow prev-arrow"></button>',
			autoplaySpeed: 6000,
			dots: true,
			responsive: [{
				breakpoint: 920,
				settings: {
					slidesToShow: 1,
				}
			}]
		});
	});

	$(document).ready(function () {
		$('.p-index__shop ul').slick({ //{}を入れる
			autoplay: true,
			slidesToShow: 1,
			prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_02.svg" class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_02.svg" class="slide-arrow prev-arrow"></button>',
			autoplaySpeed: 6000,
			dots: true,
			responsive: [{
				breakpoint: 920,
				settings: {
					slidesToShow: 1,
				}
			}]
		});
	});

	$(document).ready(function () {
		$('.p-index__document__inner ul').slick({ //{}を入れる
			autoplay: true,
			slidesToShow: 1,
			prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_01.svg" class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_01.svg" class="slide-arrow prev-arrow"></button>',
			autoplaySpeed: 6000,
			dots: true,
			responsive: [{
				breakpoint: 920,
				settings: {
					slidesToShow: 1,
				}
			}]
		});
	});

	/*----------------------------
		Dropdow
	----------------------------*/

	$(function () { // Dropdown toggle
		$('.dropdown-toggle').click(function () {
			$(this).next('.dropdown').slideToggle();
		});

		$(document).click(function (e) {
			var target = e.target;
			if (!$(target).is('.dropdown-toggle') && !$(target).parents().is('.dropdown-toggle'))
			//{ $('.dropdown').hide(); }
			{ $('.dropdown').slideUp(); }
		});
		$(".c-dropdown p, .c-dropdown input").click(function (e) {
			e.stopPropagation();
		});
		$('.search .dropdown-toggle').click(function () {
			$('.user .dropdown').slideUp();
			$('.cart .dropdown').slideUp();
		});
		$('.user .dropdown-toggle').click(function () {
			$('.search .dropdown').slideUp();
			$('.cart .dropdown').slideUp();
		});
		$('.cart .dropdown-toggle').click(function () {
			$('.search .dropdown').slideUp();
			$('.user .dropdown').slideUp();
		});

		$('.course-share__save .dropdown-toggle').click(function () {
			$('.course-share__calendar .dropdown').slideUp();
			$('.course-share__share .dropdown').slideUp();
		});
		$('.course-share__calendar .dropdown-toggle').click(function () {
			$('.course-share__save .dropdown').slideUp();
			$('.course-share__share .dropdown').slideUp();
		});
		$('.course-share__share .dropdown-toggle').click(function () {
			$('.course-share__calendar .dropdown').slideUp();
			$('.course-share__save .dropdown').slideUp();
		});
	});

	/*----------------------------
		Goto top
	----------------------------*/

	$(document).ready(function () {

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scrollup').fadeIn();
			} else {
				$('.scrollup').fadeOut();
			}
		});

		$('.scrollup').click(function () {
			$("html, body").animate({
				scrollTop: 0
			}, 0);
			return false;
		});

	});

	/*----------------------------
		Header Fixed
	----------------------------*/

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();

		if (scroll >= 180) {
			$(".l-header__scroll").addClass("aaa-fixed");
			$("body").addClass("aaa");
		} else {
			$(".l-header__scroll").removeClass("aaa-fixed");
			$("body").removeClass("aaa");
		}
	});

	/*----------------------------
		Popup Subscription 
	----------------------------*/

	$(document).ready(function () {

		$('.c-subscription__inner__close').on('click', function (e) {
			e.preventDefault();
			$('#c-modal-subscription').addClass('is-hidden-modal');
			$('body').removeClass('is-lock');
		});
	});

	/*----------------------------
		Password show,hide
	----------------------------*/

	$(".toggle-password").click(function () {
		$(this).toggleClass("toggle-password-open");
		var input = $($(this).attr("toggle"));
		if (input.attr("type") == "password") {
			input.attr("type", "text");
		} else {
			input.attr("type", "password");
		}
	});

	/*----------------------------
		Avatar upload
	----------------------------*/

	function readURL(input) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				$('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
				$('#imagePreview').hide();
				$('#imagePreview').fadeIn(650);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}
	$("#imageUpload").change(function () {
		readURL(this);
	});

	/*----------------------------
		Shop
	----------------------------*/

	$(document).ready(function () {
		$('.shop-slider ul').slick({ //{}を入れる
			autoplay: true,
			slidesToShow: 3,
			prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_01.svg" class="slide-arrow prev-arrow"></button>',
			nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_01.svg" class="slide-arrow prev-arrow"></button>',
			autoplaySpeed: 6000,
			dots: true,
			responsive: [{
				breakpoint: 920,
				settings: {
					slidesToShow: 2,
				}
			}]
		});
	});

	/*----------------------------
		Collapse
	----------------------------*/

	$(function () {
		// (Optional) Active an item if it has the class "is-active"    
		$(".c-collapse > .c-collapse__accordion-item.is-active").children(".c-collapse__accordion-panel").slideDown();

		$(".c-collapse > .c-collapse__accordion-item").click(function () {
			// Cancel the siblings
			$(this).siblings(".c-collapse__accordion-item").removeClass("is-active").children(".c-collapse__accordion-panel").slideUp();
			// Toggle the item
			$(this).toggleClass("is-active").children(".c-collapse__accordion-panel").slideToggle("ease-out");
		});
	});

});

/*----------------------------
		Count
	----------------------------*/

$(window).load(function () {
	$('.add').click(function () {
		if ($(this).prev().val() < 10) {
			$(this).prev().val(+$(this).prev().val() + 1);
		}
	});
	$('.sub').click(function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
		}
	});
});

$(document).ready(function () {

	// variables 
	var toTop = $('.scrollup');
	// logic
	toTop.on('click', function () {
		$('html, body').animate({
			scrollTop: $('html, body').offset().top,
		});
	});

});

/*----------------------------
		Slider main
	----------------------------*/

document.documentElement.classList.add('js');

/// ----------------------------

const $rootSingle1 = $('.cSlider--single1');
const $rootNav1 = $('.cSlider--nav1');

$rootSingle1.slick({
	slide: '.cSlider__item1',
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: false,
	adaptiveHeight: true,
	prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_01.svg" class="slide-arrow prev-arrow"></button>',
	nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_01.svg" class="slide-arrow prev-arrow"></button>',
	infinite: true,
	useTransform: true,
	speed: 400,
	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	autoplay: true,
	autoplaySpeed: 5000,
	responsive: [{
		breakpoint: 1024,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
		}
	}, {
		breakpoint: 640,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}, {
		breakpoint: 420,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
		}
	}]
});

$rootNav1.on('init', function (event, slick) {
	$(this).find('.slick-slide.slick-current').addClass('is-active');
})
	.slick({
		slide: '.cSlider__item1',
		slidesToShow: 5,
		slidesToScroll: 5,
		dots: false,
		focusOnSelect: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_01.svg" class="slide-arrow prev-arrow"></button>',
		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_01.svg" class="slide-arrow prev-arrow"></button>',
		autoplaySpeed: 5000,
		responsive: [{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
			}
		}, {
			breakpoint: 710,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 420,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
			}
		}]
	});

$rootSingle1.on('afterChange', function (event, slick, currentSlide) {
	$rootNav1.slick('slickGoTo', currentSlide);
	$rootNav1.find('.slick-slide.is-active').removeClass('is-active');
	$rootNav1.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('is-active');
});

$rootNav1.on('click', '.slick-slide', function (event) {
	event.preventDefault();
	var goToSingleSlide1 = $(this).data('slick-index');

	$rootSingle1.slick('slickGoTo', goToSingleSlide1);
});