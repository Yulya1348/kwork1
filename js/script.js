
// Слайдер 

const swiperHero = new Swiper('.section-hero__swiper', {
  slidesPerView: 3,
  spaceBetween: 29,
  initialSlide: 0,
  loop: true,
  navigation: {
    nextEl: ".section-hero__btn-right",
    prevEl: ".section-hero__btn-left"
  },
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
    dragSize: 100,
  },
});


