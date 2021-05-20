const sliders = document.querySelector('events__blocks');

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
    });

    sliders.dataset.mobile = 'true';
  }

  if (window.innerWidth >= 768) {
    sliders.dataset.mobile = 'false';

    mySwiper.destroy();
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider();
});
