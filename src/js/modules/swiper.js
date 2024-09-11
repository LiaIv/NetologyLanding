const swiper = new Swiper(".swiperFeedback", {
  // Default parameters
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    280: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
    835: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
