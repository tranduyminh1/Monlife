$(document).ready(function () {

    // Show the first tab and hide the rest
    $('.tabs-nav li:first-child').addClass('active');
    $('.tab-content').hide();
    $('.tab-content:first').show();

    // Click function
    $('.tabs-nav li').click(function () {
        $('.tabs-nav li').removeClass('active');
        $(this).addClass('active');
        $('.tab-content').hide();

        var activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();
        return false;
    });

});

$(document).ready(function () {

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        $('.col-video__videos').toggleClass('video-fix',
            //add 'ok' class when div position match or exceeds else remove the 'ok' class.
            scroll >= $('.p-course-detail__video').offset()?.top
        );
    });
    //trigger the scroll
    $(window).scroll();//ensure if you're in current position when page is refreshed

    $('.close-video').click(function () {
        $('.col-video__videos').removeClass('video-fix');
    });

});
