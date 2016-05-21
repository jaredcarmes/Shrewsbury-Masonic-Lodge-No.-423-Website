$(document).ready(function(){
	$(window).stuck();
});


  $(document).ready(function() {
    $('.carousel').carousel({
      interval: 5000
    })
  });


$(document).ready(function() {  
   $(".carousel").swiperight(function() {  
      $(".carousel").carousel('prev');  
    });  
   $(".carousel").swipeleft(function() {  
      $(".carousel").carousel('next');  
   });  
});  