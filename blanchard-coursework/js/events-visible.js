const btn = document.querySelector('.events__button');
// const card = document.querySelector('.non-active');

btn.addEventListener('click', function() {


  document.querySelectorAll('.events__slide').forEach(function(cardView) {
    cardView.classList.remove('non-active')
  });

  document.querySelectorAll('.events__slide').forEach(function(cardAct) {
    cardAct.classList.remove('non-actives')
  });



  btn.style.display = 'none';
});
