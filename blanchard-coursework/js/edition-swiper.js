const sell = document.querySelector('.editions__right');

let meSwiper;

function desktopSlider() {
  if (window.innerWidth >= 768 && sell.dataset.desktop == 'false') {
    meSwiper = new Swiper(sell, {
      direction: 'horizontal',
      loop: true,
      slidesPerGroup: 2,
      slidesPerView: 2,
      spaceBetween: 34,
      slideClass: 'editions__card',

      pagination: {
        el: '.editions__pagination',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      a11y: {
        prevSlideMessage: 'Предыдущая группа изданий',
        nextSlideMessage: 'Следующая группа изданий',
      },

      breakpoints: {

        1024: {
          spaceBetween: 49,
        },

        1920: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      },

    });

    sell.dataset.desktop = 'true';
  }

  if (window.innerWidth < 768) {
    sell.dataset.desktop = 'false';

    if (sell.classList.contains('swiper-container-initialized')) {
      meSwiper.destroy();
    }
  }
}

desktopSlider()

window.addEventListener('resize', () => {
  desktopSlider();
});
