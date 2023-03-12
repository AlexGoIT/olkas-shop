import Swiper from 'swiper/bundle';

const heroSwiper = new Swiper('.hero-swiper', {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true,
    bulletClass: 'hero-slider-pagination-bullet',
    bulletActiveClass: 'hero-slider-pagination-bullet-active',
  },

  // Navigation arrows
  navigation: {
    prevEl: '.slider-button-prev',
    nextEl: '.slider-button-next',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});
