$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-menu').addClass('show-menu');
    });
    $('#nav-close').click(function(){
        $('#nav-menu').removeClass('show-menu');
    })
    $(window).scroll(function(){
        $("#header").toggleClass("scroll-header", $(this).scrollTop() >= 50);
    });
});
let swiperFeature = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        1150: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});