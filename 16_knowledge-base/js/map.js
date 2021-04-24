// Функция ymaps.ready() будет вызвана, когда
    // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
    ymaps.ready(init);
    function init(){
        // Создание карты.
        var myMap = new ymaps.Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [48.872185073737896,2.3542149999999555],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });
        var myPlacemark = new ymaps.Placemark([48.872185073737896,2.3542149999999555], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/Subtract.svg',
          iconImageSize: [28, 40],
          iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);
    }
