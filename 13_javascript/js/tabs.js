document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.section-work__link').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(evt) {
      const path = evt.currentTarget.dataset.path


      document.querySelectorAll('.section-work__content').forEach(function(tabContent) {
        tabContent.classList.remove('section-work__content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('section-work__content-active')
    })
  })


});
