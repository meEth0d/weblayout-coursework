document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.header__form-container').classList.add('form-active'),
    document.querySelector('.header__nav').classList.add('nav-active')
  });
  document.querySelector('.header__form-close').addEventListener('click', function() {
    document.querySelector('.header__form-container').classList.remove('form-active'),
    document.querySelector('.header__nav').classList.remove('nav-active')
  });
});
