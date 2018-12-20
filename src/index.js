// accordion actions
$(function() {
  var items = $(".accordion__items");
  
  items.on("click",function(){
    if($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().removeClass("open");
    } else {
      $(this).siblings().removeClass("active");
      $(this).next().siblings().removeClass("open");
      $(this).toggleClass("active");
      $(this).next().toggleClass("open");
    }
  });
});

// pannel btn actions
$(document).ready(()=>{
    $('.btn').click(()=>{
        $('nav ul').slideToggle(1000);
    })
    $(".fa-chevron-down").on("click", function() {
    var $ele = $(this).parents('.panel-heading');
    $ele.siblings('.panel-footer').toggleClass("rad-collapse");
    $ele.siblings('.panel-body').toggleClass("rad-collapse", function() {
      setTimeout(function() {
        initializeCharts();
      }, 200);
    });
  });


  $(".fa-close").on("click", function() {
    var $ele = $(this).parents('.panel');
    $ele.addClass('panel-close');
    setTimeout(function() {
      $ele.remove();
      
    }, 210);
  });




  $(".buttom-btn").click(function(){
		$(".top-btn").addClass('top-btn-show');
		$(".contact-form-page").addClass('show-profile');
		$(this).addClass('buttom-btn-hide')
	});

	$(".top-btn").click(function(){
		$(".buttom-btn").removeClass('buttom-btn-hide');
		$(".contact-form-page").removeClass('show-profile');
  });
  

  $( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });
}) 


