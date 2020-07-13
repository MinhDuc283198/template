
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(document).ready( 
    function()
    {
        $('.main-index').waypoint(
            function(direction){
                if(direction=="down"){
                    $('nav').addClass('sticky');
                }
            }
            ,{
                offset: '500px'
            }
        )
    }
);
   
$(document).ready(function(){
	  $(".carousel slide").sectionslider({
	     loop:true,
	    margin:0,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	            nav:true
	        },
	    }
      });
      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    $('#owl-demo2').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
                },
            200:{
                items:2
                },
            769:{
                  items:3
                },
            992:{
                items:5
                }
            }
        });

    $(document).ready(function(){
    $(window).scroll(function() {    
       var scroll = $(window).scrollTop();
       if (scroll > 100) {
            $(".topnav-1").addClass("sticky");
       } else {
            $(".topnav-1").removeClass("sticky");
       }
    });
});

  //       pos =  $(".topnav").position();
	 //    $(window).scroll(function() {
		// var posScroll = $(document).scrollTop();
	 //    if (parseInt(posScroll) > parseInt(pos.top)) {
	 //        $(".topnav").addClass('fix');
	 //    } else {
	 //        $(".topnav").removeClass('fix');
	 //    }
  //       })
  //       pos =  $(".topnav").position();
  //   $(window).scroll(function() {
  //   var posScroll = $(document).scrollTop();
  //   if (parseInt(posScroll) > parseInt(pos.top)) {
  //       $(".topnav").addClass('fix');
  //   } else {
  //       $(".topnav").removeClass('fix');
  //   }
  //   })
  //   });
  // 