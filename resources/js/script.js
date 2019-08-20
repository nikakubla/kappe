$(document).ready(function($) {

    var toggleInfo = $('.info-toggle'),
        toggleNavbar = $('.navbar-right');

    var toggleBurger = $('.burger'),
        toggleMenu = $('.menu');

    toggleInfo.on('click', function(e) {
        e.preventDefault();

        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            toggleNavbar.addClass('active animated zoomIn');
        } else {
            $(this).removeClass('active');
            toggleNavbar.removeClass('active zoomIn');
        }

    });

    toggleBurger.on('click', function(e) {
        e.preventDefault();


        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            toggleMenu.addClass('active animated slideInLeft');
            toggleBurger.addClass('change');


        } else {
            $(this).removeClass('active');
            toggleMenu.removeClass('active animated slideInLeft');
            toggleBurger.removeClass('change');

        }
    });

});