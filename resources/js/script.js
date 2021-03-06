$(document).ready(function(){
//   $('h1').click(function(){
//      $(this).css('background-color','#ff0000'); 
//   }); 
    
   
  
    /* Sticky notification */  
    var waypoint = new Waypoint({
      element: document.getElementById('features'),
      handler: function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
             $('nav').removeClass('sticky');
        }
      },
      offset: '60'
    });
//    js--section-features
    $('.js--scrol-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top},1000);
    });
    $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top},1000);
    });
    
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
        });
    });
    
//    Animation on scroll
     var waypoint = new Waypoint({
      element: document.getElementById('js--wp-1'),
      handler: function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
      },
      offset: '50%'
    }); 
    var waypoint = new Waypoint({
      element: document.getElementById('js--wp-2'),
      handler: function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
      },
      offset: '50%'
    }); 
    var waypoint = new Waypoint({
      element: document.getElementById('js--wp-3'),
      handler: function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
      },
      offset: '50%'
    }); 
    var waypoint = new Waypoint({
      element: document.getElementById('js--wp-4'),
      handler: function(direction) {
        $('.js--wp-4').addClass('animated pulse');
      },
      offset: '50%'
    });
    
    //Mobile navigation
    
    $('.js--nav-icon').click(function(){
       var nav = $('.js--main-nav');
       var icon = $('.js--nav-icon i');
        
       if(icon.hasClass('ion-navicon-round')){
           icon.removeClass('ion-navicon-round');
           icon.addClass('ion-close-round');
       }else{
           icon.addClass('ion-navicon-round');
           icon.removeClass('ion-close-round');
       }
       nav.slideToggle(200);
        
       
    });
    
    //Map
    var map = new GMaps({
      div: '.map',
      lat: 10.7689999,
      lng: 106.5,
        zoom: 12
    });
    
    map.addMarker({
      lat: 10.7689999,
      lng: 106.414175,
      title: 'I am here',
        infoWindow: {
            content: 'I am here'
        }
    });
});