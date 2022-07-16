$(document).ready(function () {

    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobnav = document.querySelector('.mob-nav');
    hamberger.addEventListener('click', function () {
        mobnav.classList.add('open');


    });
    times.addEventListener('click', function () {
        mobnav.classList.remove('open');


    });


});