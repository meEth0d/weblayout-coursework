document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__lang-button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(evt) {
      const path = evt.currentTarget.dataset.path


      document.querySelectorAll('.catalog__lang-content').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__lang-content-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__lang-content-active')
    });
  });


});
