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
let swiperlounge = new Swiper('.lounge__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1240: {
            slidesPerView: 4,
            centeredSlides: false,
        }
    }
});