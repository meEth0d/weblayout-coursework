document.addEventListener("DOMContentLoaded", function() {
  const searchOpenBtn = document.querySelector('#search');
  const search = document.querySelector('#find');
  const searchInput = search.querySelector('.js-search-input');
  const searchBtn = search.querySelector('.js-search-btn');
  const closeBtn = search.querySelector('.js-search-close');

  searchOpenBtn.addEventListener('click', function() {
    search.classList.toggle('activated');
    searchInput.removeAttribute('tabindex');
    searchBtn.removeAttribute('tabindex');
    closeBtn.removeAttribute('tabindex');
  });

  document.querySelector('#closesearch').addEventListener('click', function() {
    search.classList.toggle('activated');
    searchInput.setAttribute('tabindex', '-1');
    searchBtn.setAttribute('tabindex', '-1');
    closeBtn.setAttribute('tabindex', '-1');
  });
});
