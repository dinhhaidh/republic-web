$(document).ready(function () {
  $("#nav-toggle").click(function(){
    $("#nav-menu").addClass("show-menu");
    $("#nav-toggle").hide();
    $("#nav-close").show();
    
  });
  $("#nav-close").click(function(){
    $("#nav-menu").removeClass("show-menu");
    $("#nav-close").hide();
    $("#nav-toggle").show();
  });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
  $('.nav__item a').click(function(){
    $("#nav-menu").removeClass("show-menu");
  });
  $(window).scroll(function(){
    $("#header").toggleClass("scroll-header", $(this).scrollTop() >= 50);
    $("#scroll-up").toggleClass("show-scroll", $(this).scrollTop() >= 350);
  });
});
/*=============== SWIPER PRODUCTS ===============*/
var swiperLounge = new Swiper(".lounge__container ", {
  // luot lien tuc
  slidesPerView: 3.5,
  spaceBetween: 3,
  grabCursor: true,
  // centeredSlides: true,
  loop: true,
  navigator: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {

    100: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    330: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    450: {
      slidesPerView: 1.5,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3.3,
      spaceBetween: 50,
    },
  },
});

// bedoom
var swiper = new Swiper(".bedroom__container ", {
  spaceBetween: 32,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
sr.reveal(`.home__content, .bedroom`) //hiệu ứng trên xuống
sr.reveal(`.home__images`,{delay: 600, origin: 'bottom'})
sr.reveal(` .lounge__container, .footer`,{interval: 100}) //hiệu ứng trêm xuống lần lần từng giây
sr.reveal(`.kitchen__special`,{origin: 'right'})
sr.reveal(`.kitchen__image`,{origin: 'left'})
sr.reveal(`.kitchen__kitchenwarea`,{origin: 'left'})
sr.reveal(`.kitchen__lighting`,{origin: 'right'})
sr.reveal(`.lighting__list`,{origin: 'right'})
sr.reveal(`.lighting__form `,{origin: 'left'})
