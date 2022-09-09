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



document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.catalog__link-name').forEach(function(tabsLink) {
    tabsLink.addEventListener('click', function(biblio) {
      const path = biblio.currentTarget.dataset.path

      document.querySelectorAll('.catalog__biblio').forEach(function(linkContent) {
        linkContent.classList.remove('catalog__biblio-link-active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__biblio-link-active')
    });
  });
});
