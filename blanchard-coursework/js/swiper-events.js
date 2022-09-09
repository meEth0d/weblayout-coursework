const sliders = document.querySelector('.events__blocks');

let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && sliders.dataset.mobile == 'false') {
    mySwiper = new Swiper(sliders, {
      direction: 'horizontal',
      loop: true,
      slidesPerView: 1,
      slideClass: 'events__slide',

      pagination: {
        el: '.swiper-pagination',
      },

      a11y: {
        prevSlideMessage: 'Предыдущее событие',
        nextSlideMessage: 'Следующее событие',
        paginationBulletMessage: 'Перейти к событию',
      },
    });

    sliders.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    sliders.dataset.mobile = 'false';

    if (sliders.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});
