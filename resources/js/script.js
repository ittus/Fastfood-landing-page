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
});