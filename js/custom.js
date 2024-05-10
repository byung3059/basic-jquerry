$(function () {
    $('.main_slide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        dots: true,
        pauseOnHover: false,
    });

    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')
    })
})


