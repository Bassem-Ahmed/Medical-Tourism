$(function (){
    'use strict';

    // start smoth scroll to section
    $('.navbar a').click(function(){
        $('html , body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1500)
    })
    // end smoth scroll to section

    // start adjust slider height
    var upperBarheight = $('.upper-bar').innerHeight(),
        navbarHeight = $('.navbar').innerHeight(),
        veiwportHeight = $(window).height();

    $('.slider, .carousel-item').height(veiwportHeight - navbarHeight);
    // end adjust slider height
})