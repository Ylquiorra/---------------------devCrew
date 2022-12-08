'use strict';
//Слайдер
var swiper = new Swiper('.mySwiper', {
  spaceBetween: 100,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.person-slider__pagination',
  },
});


// Скрипт для понимания PC или Touch
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },

  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows());
  }
};


const menuArrows = document.querySelector('.header-nav-row__link-down-arrow')
const subMenu = document.querySelector('.header-nav-row__sub-list')
menuArrows.addEventListener('click', function (e) {
  subMenu.classList.toggle('_active')
})





// Меню бургер
const iconMenu = document.querySelector('.header-row__burger-icon');
const menuBody = document.querySelector('.header-row__nav');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock'); //!запрет скролла
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

