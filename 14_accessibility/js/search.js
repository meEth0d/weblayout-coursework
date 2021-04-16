document.addEventListener("DOMContentLoaded", function() {
  document.querySelector('#search').addEventListener('click', function() {
    document.querySelector('#find').classList.toggle('activated')
  });
  document.querySelector('#closesearch').addEventListener('click', function() {
    document.querySelector('#find').classList.toggle('activated')
  });
});
