// Mobile menu
const menuButton = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__list');
const menuClose = document.querySelector('.menu__close');
const menuLink = document.querySelectorAll('.menu__link');
const body = document.querySelector('body');

const openMenu = () => {
    menu.classList.add('active');
    menuClose.classList.add('active');
    body.classList.add('no-scroll');
};

menuButton.addEventListener('click', openMenu);

const closeMenu = () => {
    menu.classList.remove('active');
    menuClose.classList.remove('active');
    body.classList.remove('no-scroll');
};

menuClose.addEventListener('click', closeMenu);
menuLink.forEach((el) => el.addEventListener('click', closeMenu));

// Swiper
let swiper = new Swiper('.swiper-container', {
    // slidesPerView: 3,
    spaceBetween: 30,
    // autoHeight: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewheel: {
        invert: true,
    },
    loop: true,
    breakpoints: {
        480: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
});
