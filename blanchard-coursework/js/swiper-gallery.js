const swiper = new Swiper('.gallery__slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 34
    }
  }

});
