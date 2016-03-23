$(document).ready(function(){
//   $('h1').click(function(){
//      $(this).css('background-color','#ff0000'); 
//   }); 
    
   
  
    
    var waypoint = new Waypoint({
      element: document.getElementById('js--section-features'),
      handler: function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else {
             $('nav').removeClass('sticky');
        }
      },
      offset: '60'
    });
});