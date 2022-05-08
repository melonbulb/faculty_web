'use strict';
$(window).on('load',function(){
    /*--Preloader--*/
    $(".loader").fadeOut();
    $("#preloader").delay(400).fadeOut("slow");
});
(function ($){
    /*Toggle nav-switch */
    $('.nav-bar').click(function(){
      $(".main-menu").toggleClass("active");
    });
    /*Set Background image -hero section*/
    $('.set-bg').each(function(){
        var bg = $(this).data('setbg');
        $(this).css('background-image','url('+bg+')');
        $(this).css('opacity','0.5');
    });
    /*feedslider*/
    $('.feed-slider').owlCarousel({
        loop:true,
        nav:false,
        dots:true,
        margin:128,
        center:true,
        items:1,
        mouseDrag:false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true
     });
})(jQuery);