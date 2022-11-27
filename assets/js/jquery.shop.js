/*----------------------------
        Shop Details
----------------------------*/
$(document).ready(function () {

    /*----------------------------
        fancybox
    ----------------------------*/

    $('[data-fancybox="gallery"]').fancybox({
        hash: true
    })

    /*----------------------------
        StickySidebar
    ----------------------------*/

    var a = new StickySidebar('#sidebar', {
        topSpacing: 140,
        bottomSpacing: 0,
        containerSelector: '.container',
        innerWrapperSelector: '.sidebar__inner'
    });

    /*----------------------------
        Click show write comments
    ----------------------------*/

    $('.write-button').click(function () {
        $('.p-shop__inner__review__form').slideToggle("slow");
        // Alternative animation for example
        // slideToggle("fast");
    });

    /*----------------------------
        Popup Subscription 
    ----------------------------*/

    $(document).ready(function () {

        $('.c-qr-code__inner__close').on('click', function (e) {
            e.preventDefault();
            $('#c-qr-code').addClass('is-hidden-modal');
            $('body').removeClass('is-lock');
        });
    });

    $('.qr-code').on('click', function (e) {
        e.preventDefault();
        $('#c-qr-code').toggleClass('is-hidden-modal');
    });

});