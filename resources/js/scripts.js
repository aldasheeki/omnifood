$(document).ready(function() {

    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
    offset: '300px' 
    });
    
//    Scroll on buttons
    
    $('.js--scroll-to-plan').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000); 
    });
    
    $('.js--scroll-to-start').click(function() {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000); 
    });

// Navigation scroll
  
    $(function() {
        $('a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .click(function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000);
                return false;
              }
            }
        });
    });

// Animations on scroll
    
    $('.js--app-screen').waypoint(function(direction) {
//        $('.js--app-screen').addClass('animated fadeIn');
        $('.js--app-screen').addClass('animated pulse');
    }, {
        offset:'20%'
    });
    
// Mobile navigation
    
    $('.js--nav-icon').click(function() { 
       var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
            
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        } 
    });
    
});

    
    
