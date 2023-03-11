import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  spaceBetween: 30,

  // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    prevEl: '.slider-button-prev',
    nextEl: '.slider-button-next',
  },

});
