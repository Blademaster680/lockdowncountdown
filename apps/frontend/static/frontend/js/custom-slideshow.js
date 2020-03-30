/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US
   
    ========================================================  */

(function ($) {
    "use strict";
    var mainApp = {


        plusMain: function () {

            //FUNCTION TO SCROLL BETWEEN LEFT MENU LINKS
            $(function () {
                $('nav a').bind('click', function (event) {
                    var $anchor = $(this);

                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutExpo');
                    /*
                    if you don't want to use the easing effects:
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000);
                    */
                    event.preventDefault();
                });
            });


            // MAIN FUNTION FOR TRIGGER LEFT MENU


            $('.Icon-trigger span').click(function () {
                if (
            $('.left-panel').css('left') == '-160px') {
                    $('.left-panel').animate({ left: '0px' });
                }
                else
                    $('.left-panel').animate({ left: '-160px' });
            });

            /** VEGAS SLIDESHOW IMAGES  **/
            $(function () {
                $.vegas('slideshow', {
                    backgrounds: [
                      { src: 'assets/img/2.jpg', fade: 1000, delay: 9000 }, //CHANGE THESE IMAGES WITH YOUR ORIGINAL IMAGES
                       { src: 'assets/img/1.jpg', fade: 1000, delay: 9000 }, //THESE IMAGES ARE FOR DEMO PURPOSE ONLY YOU, CAN NOT USE THEM WITHOUT AUTHORS PERMISSION
                        { src: 'assets/img/3.jpg', fade: 1000, delay: 9000 }, //SEE DOCUMENTATION FOR ORIGINAL URLs/LINKs OF IMAGES
                        
                    ]
                })('overlay', {
                    /** SLIDESHOW OVERLAY IMAGE **/
                    src: 'assets/plugins/vegas/overlays/01.png' // THERE ARE TOTAL 01 TO 15 .png IMAGES AT THE PATH GIVEN, WHICH YOU CAN USE HERE
                });


            });

            /*
            YOU CAN WRITE 
            YOUR SCRIPTS HERE
            
            */



        },

        initialization: function () {
            mainApp.plusMain();

        }


    }
    // INITIALIZING ///

    $(document).ready(function () {
        mainApp.plusMain();
    });


}(jQuery));


