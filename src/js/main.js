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






if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}