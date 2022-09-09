var selector = document.querySelector("input[type='tel']");
var im = new Inputmask("+7 (999)-999-99-99");

im.mask(selector);

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Поле должно содержать не менее 2 букв',
      maxLength: 'Поле должно содержать не более 20 букв'
    },
    tel: 'Некорректный номер телефона',
    mail: 'Некорретный email'
  }
});

new JustValidate('.down-form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 20
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      }
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Введите имя',
      minLength: 'Поле должно содержать не менее 2 букв',
      maxLength: 'Поле должно содержать не более 20 букв'
    },
    tel: 'Некорректный номер телефона',
    mail: 'Некорретный email'
  }
});
