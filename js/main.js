(function ($) {

    "use strict";
    // data - background
  
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
  
    })


    $('.slider-active').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots:false,
      arrows: false,
    });
    
      
       
  
  
  })(jQuery);