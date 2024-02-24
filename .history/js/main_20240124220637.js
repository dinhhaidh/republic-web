$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $("#nav-menu").addClass("show-menu");
  });
  $("#nav-close").click(function () {
    $("#nav-menu").removeClass("show-menu");
  });
  $(window).scroll(function () {
    $("#header").toggleClass("scroll-header", $(this).scrollTop() >= 50);
  });
});
/*=============== SWIPER PRODUCTS ===============*/
var swiperLounge = new Swiper(".lounge__container", {
  // luot lien tuc
  slidesPerView: 3,
  spaceBetween: 3.5,
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  navigator: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // lích thước resposive
  breakpoints: {
    1240: {
      spaceBetween: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 1,
    },
    450: {
      slidesPerView: 1,
      spaceBetween: 1,
    },
  }
});

// var swiper = new Swiper(".lounge__container", {
//   // luot lien tuc
//     spaceBetween: 32,
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     loop: true,

// slidesPerView: 3,
// spaceBetween: 30,
// freeMode: true,
// pagination: {
//   el: ".swiper-pagination",
//   clickable: true,
// },

//   slidesPerView: 3,
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });