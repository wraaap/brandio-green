// Custom Scripts
// Custom scripts

// Мобильное меню бургер
function burgerMenu() {
    const burger = document.querySelector('.burger')
    const menu = document.querySelector('.menu')
    const body = document.querySelector('body')
    const menuItem = document.querySelectorAll('.menu__item')
    burger.addEventListener('click', () => {
      if (!menu.classList.contains('active')) {
        menu.classList.add('active')
        burger.classList.add('active-burger')
        body.classList.add('locked')
      } else {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
    menuItem.forEach(item => {
      item.addEventListener('click', () => {
          burger.classList.toggle('active-burger');
          menu.classList.toggle('active');
          body.classList.remove('locked')
      })
  })
    // Вот тут мы ставим брейкпоинт навбара
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991.98) {
        menu.classList.remove('active')
        burger.classList.remove('active-burger')
        body.classList.remove('locked')
      }
    })
  }
  burgerMenu()
  
  
  // Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
  function fixedNav() {
    const nav = document.querySelector('nav')
  
    // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
    const breakpoint = 1
    if (window.scrollY >= breakpoint) {
      nav.classList.add('fixed__nav')
    } else {
      nav.classList.remove('fixed__nav')
    }
  }
  window.addEventListener('scroll', fixedNav)


// <!-- Initialize Swiper -->
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 1000px
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

function animationDecorAll() {
// Получаем начальные значения из стилей
let heroDecorator1 = document.querySelector('.hero__decorator-1')
let heroDecorator2 = document.querySelector('.hero__decorator-2')
let heroDecorator3 = document.querySelector('.hero__decorator-3')
let initialTop1 = parseInt(window.getComputedStyle(heroDecorator1).getPropertyValue('top'));
let initialLeft1 = parseInt(window.getComputedStyle(heroDecorator1).getPropertyValue('left'));
let initialTop2 = parseInt(window.getComputedStyle(heroDecorator2).getPropertyValue('top'));
let initialLeft2 = parseInt(window.getComputedStyle(heroDecorator2).getPropertyValue('left'));

  function animationDecor() {
    let value = window.scrollY;

    heroDecorator1.style.top = (value * 0.5 + initialTop1) + 'px';
    heroDecorator1.style.left = (value * -0.3 + initialLeft1) + 'px';
    heroDecorator2.style.top = (value * 0.15 + initialTop2) + 'px';
    heroDecorator2.style.left = (value * 0.1 + initialLeft2) + 'px';
    heroDecorator3.style.bottom = value * -0.5 + 'px';
    heroDecorator3.style.left = value * -0.7 + 'px';
  }
window.addEventListener('scroll', animationDecor)
}
animationDecorAll()