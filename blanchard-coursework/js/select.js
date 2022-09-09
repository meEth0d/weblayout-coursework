const elements = document.querySelectorAll('.js-choices');
elements.forEach(el => {
  const choices = new Choices(el, {
    searchEnabled: false,
    itemSelectText: '',
    item: [{
      id: 1
    }]
  });
});
