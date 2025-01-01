$(function () {
    $('.photo-slider').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/photo-arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/photo-arrow-right.svg" alt=""></button>'
    });

});