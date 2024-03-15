// Burger menus
document.addEventListener('DOMContentLoaded', function () {
    // open
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('body');
    // const close = document.querySelector('.navbar-close');

    burger.addEventListener('click', function () {
        menu.classList.toggle('mobileNav');
    });

    // close
    // const backdrop = document.querySelectorAll('.navbar-backdrop');

    // close.addEventListener('click', function () {
    //     for (var j = 0; j < menu.length; j++) {
    //         menu[j].classList.toggle('hidden');
    //         menu[j].classList.toggle('top-0');
    //         menu[j].classList.toggle('absolute');
    //     }
    // });
    // if (backdrop.length) {
    //     for (var i = 0; i < backdrop.length; i++) {
    //         backdrop[i].addEventListener('click', function() {
    //             for (var j = 0; j < menu.length; j++) {
    //                 menu[j].classList.toggle('hidden');
    //                 menu[j].classList.toggle('top-0');
    //                 menu[j].classList.toggle('absolute');
    //             }
    //         });
    //     }
    // }
});