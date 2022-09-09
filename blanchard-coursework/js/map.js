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
            center: [55.810921, 36.972268],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 14
        });
        var myPlacemark = new ymaps.Placemark([55.810921, 36.972268], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'img/map.svg',
          iconImageSize: [28, 40],
          iconImageOffset: [-3, -42]
        });
        myMap.geoObjects.add(myPlacemark);
    }
