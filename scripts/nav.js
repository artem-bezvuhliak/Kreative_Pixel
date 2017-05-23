$(document).ready(function(){
    $('.b-navigation__item').click(function() {
        $('.b-navigation__item').removeClass("b-navigation__item--active"); // удаляем у всех ссылок класс active
        $(this).addClass("b-navigation__item--active"); // устанавливаем класс active при нажатии
    })
})
