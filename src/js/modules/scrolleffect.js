ScrollReveal({
  reset: false,
  distance: "60px",
  duration: 2000,
  delay: 1000,
});

ScrollReveal().reveal(
  ".header__main-left__title, .header__main__logo, .swiper-heading__title, .advantages__heading, .header__main-left__subtitle, .swiper-heading__left",
  {
    delay: 300,
    origin: "left",
  }
);

ScrollReveal().reveal(".benefits__image-container", {
  delay: 300,
  origin: "left",
});

ScrollReveal().reveal(".footer__main div", {
  delay: 400,
  origin: "left",
  interval: 400,
});

ScrollReveal().reveal(".header__main-left__buttons", {
  delay: 450,
  distance: 0,
});

ScrollReveal().reveal(".header__main-left__links a, .stats__list li", {
  delay: 300,
  origin: "bottom",
  distance: "50px",
  interval: 100,
});

ScrollReveal().reveal(".benefits__title, .benefits__description", {
  delay: 300,
  origin: "right",
  interval: 150,
});

ScrollReveal().reveal(".header__main-right__phone", {
  delay: 300,
  origin: "bottom",
  distance: "120px",
});

ScrollReveal().reveal(
  ".advantages__main div, .swiper-wrapper, .swiper-heading__right, .footer__socials a, .footer__logo",
  {
    delay: 100,
    distance: 0,
    interval: 100,
  }
);

ScrollReveal().reveal(".benefits__item, .header__main", {
  delay: 10,
  distance: 0,
});
