(function($) {
    'use strict';

    
    /*pricing table*/
    $( ".pricing-table" ).mouseover(function() {
      jQuery(this).children(".get-now").slideDown( "slow" );
    });
    $( ".pricing-table" ).mouseleave(function() {
      jQuery(this).children(".get-now").slideUp( "slow" );
    });

    jQuery('.count').each(function() {
        jQuery(this).prop('Counter', 0).animate({
             Counter: jQuery(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function(now) {
                jQuery(this).text(Math.ceil(now));
           }
        });
     });

    /*sticky sidebar*/
      jQuery('#primary , #secondary').theiaStickySidebar({
        additionalMarginTop: 30
      });

    //tab js
    $('.tab-option .tab-option-title').on("click", function () {
        var tab_id = $(this).attr('data-tab');
        $('.tab-option .tab-option-title').removeClass('current');
        $('.tab-content').removeClass('current');
        $(this).addClass('current');
        $("." + tab_id).addClass('current');
    });
    /*meanmenu js for responsive menu for header-layout-1*/
    jQuery('.menu-container').meanmenu({
        meanMenuContainer: '.hgroup-wrap .container .navbar',
        meanScreenWidth: "992",
        meanRevealPosition: "right",
    });
    /* back-to-top button */
    jQuery('.back-to-top').hide();
    jQuery('.back-to-top').on("click", function(e) {
        e.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });

    jQuery(window).scroll(function() {
        var scrollheight = 400;
        if (jQuery(window).scrollTop() > scrollheight) {
            jQuery('.back-to-top').fadeIn();

        } else {
            jQuery('.back-to-top').fadeOut();
        }
    });

    /*featured banner slider*/
    jQuery('.featured-banner').slick({
        slidesToShow: 1,
        dots: true,
        arrows:false
    });

    /*testimonial carousel*/
    jQuery('.testimonial-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0
    });

    /*team section carousel*/
    jQuery('.team-wrapper').slick({
        dots: true,
        arrows:false,
        infinite: false,
        speed: 300,
        adaptiveHeight: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    /*testimonial carousel*/
    jQuery('.cta-wrap').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots:true,
        arrows:false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: 0
    });


    /*client section*/
    jQuery('.client-wrap').slick({
        dots: false,
        arrows:true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    // header search toggle
    var removeClass = true;
    $(".header-search-icon").on("click", function() {
        $(".header-search-input").toggleClass('on');
        removeClass = false;
    });
    // when clicking the div : never remove the class
    $(".header-search-input form").click(function() {
        removeClass = false;
    });
    // when click event reaches "html" : remove class if needed, and reset flag
    $("html, .close-icon").click(function () {
        if (removeClass) {
            $(".header-search-input").removeClass('on');
        }
        removeClass = true;
    });
    jQuery('.time-schedule').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: false,
    });
   
    $(document).ready(function() {

        $.extend( true, $.magnificPopup.defaults, {  
          iframe: {
              patterns: {
                 youtube: {
                    index: 'youtube.com/', 
                    id: 'v=', 
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
                }
              }
          }
        });

        $('.popup-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

    });

    
     /*initializing wow.js for animation*/
        new WOW().init();
    

})(jQuery);
