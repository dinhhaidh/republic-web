$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $("#nav-menu").addClass("show-menu");
  });
  $("#nav-close").click(function () {
    $("#nav-menu").removeClass("show-menu");
  });
  $(window).scroll(function () {
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
  // lích thước resposive
  // breakpoints: {
  //   220: {
  //     slidesPerView: 1,
  //     spaceBetween: 20,
  //   },
  //   450: {
  //     slidesPerView: 1.5,
  //     spaceBetween: 20,
  //   },
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 40,
  //   },
  //   820: {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   1240: {
  //     slidesPerView: 3.2,
  //     spaceBetween: 20,
  //   }
  // }

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
      spaceBetween: 20,
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

  // breakpoints: {
  //   "@0.00": {
  //     slidesPerView: 1,
  //     spaceBetween: 10,
  //   },
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   "@1.00": {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   "@1.50": {
  //     slidesPerView: 3.5,
  //     spaceBetween: 50,
  //   },
  // },
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
  },
});
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})
sr.reveal(`home__content, .bedroom__images,`) //hiệu ứng trên xuống
sr.reveal(` .bedroom__content, home__images`,{delay: 600, origin: 'bottom'})
sr.reveal(`.new__card, .brand__img`,{interval: 100}) //hiệu ứng trêm xuống lần lần từng giây
sr.reveal(`.collection__explore:nth-child(1)`,{origin: 'right'})
sr.reveal(`.collection__explore:nth-child(2)`,{origin: 'left'})
