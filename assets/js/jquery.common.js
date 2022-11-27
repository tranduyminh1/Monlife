/* Mobile menu  */

$(function () {
    $('.js-toggle').on('click', function () {
        $('.c-menu-mobile').toggleClass('c-menu-mobile-o');
        $('.l-header__inner__row__mobile').toggleClass('is-active');
        $('body').toggleClass('is-lock');
        return false;
    });
    $('.close').on('click', function () {
        $('.c-menu-mobile').removeClass('c-menu-mobile-o');
        $('.l-header__inner__row__mobile').removeClass('is-active');
        $('body').removeClass('is-lock');
        return false;
    });
});

$(window).load(function () {

    document.documentElement.classList.add('js');

    /// ----------------------------

    const $rootSingle = $('.cSlider--single');
    const $rootNav = $('.cSlider--nav');

    $rootSingle.slick({
        slide: '.cSlider__item',
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        adaptiveHeight: true,
        infinite: false,
        useTransform: true,
        speed: 400,
        cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_01.svg" class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_01.svg" class="slide-arrow prev-arrow"></button>',
    });

    $rootNav.on('init', function (event, slick) {
        $(this).find('.slick-slide.slick-current').addClass('is-active');
    })
        .slick({
            slide: '.cSlider__item',
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            focusOnSelect: false,
            infinite: false,
            prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><img src="./assets/img/common/icn_arrow_left_slider_01.svg" class="slide-arrow prev-arrow"></button>',
            nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><img src="./assets/img/common/icn_arrow_right_slider_01.svg" class="slide-arrow prev-arrow"></button>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            }, {
                breakpoint: 420,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            }]
        });

    $rootSingle.on('afterChange', function (event, slick, currentSlide) {
        $rootNav.slick('slickGoTo', currentSlide);
        $rootNav.find('.slick-slide.is-active').removeClass('is-active');
        $rootNav.find('.slick-slide[data-slick-index="' + currentSlide + '"]').addClass('is-active');
    });

    $rootNav.on('click', '.slick-slide', function (event) {
        event.preventDefault();
        var goToSingleSlide = $(this).data('slick-index');

        $rootSingle.slick('slickGoTo', goToSingleSlide);
    });

    $('.cSlider--nav').slick('setPosition');
    $('.cSlider--single').slick('setPosition');

});