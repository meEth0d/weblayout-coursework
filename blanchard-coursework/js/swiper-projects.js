const proslider = new Swiper('.projects__swiper', {

  direction: 'horizontal',
  loop: true,




  navigation: {
    nextEl: '.swiper-button-next, .projects__next',
    prevEl: '.swiper-button-prev, .projects__prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущая группа спонсоров',
    nextSlideMessage: 'Следующая группа спонсоров',
  },

  breakpoints: {

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
  },

});
