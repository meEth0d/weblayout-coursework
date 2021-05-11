document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('is-active'),
    document.querySelector('.header__burger').classList.toggle('active'),
    document.querySelector('#personal').classList.toggle('is-actived')
  });
});
