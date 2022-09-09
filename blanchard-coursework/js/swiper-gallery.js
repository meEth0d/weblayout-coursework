const swiper = new Swiper('.gallery__slider', {
  // Optional parameters
  direction: 'horizontal',

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

  a11y: {
    prevSlideMessage: 'Предыдущая группа изображений',
    nextSlideMessage: 'Следующая группа изображений',
  },

  breakpoints: {

    320: {

    },

    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 34
    },

    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 34
    },

    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row',
      spaceBetween: 50,
    }
  }

});
