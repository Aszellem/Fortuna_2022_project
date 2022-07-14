
(function($) {
	'use strict';
	
	jQuery(document).on('ready', function(){
	
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/		
			 	
		function windowScroll() {
			const navbar = document.getElementById("navbar");
			if (
				document.body.scrollTop >= 50 ||
				document.documentElement.scrollTop >= 50
			) {
				navbar.classList.add("nav-sticky");
			} else {
				navbar.classList.remove("nav-sticky");
			}
		}

		window.addEventListener('scroll', (ev) => {
			ev.preventDefault();
			windowScroll();
		})	  	 
		
	}); 	 
    
})(jQuery); 

// bottom to up
$(window).on('scroll', function () { 
    var scrolled = $(window).scrollTop();
    if (scrolled > 400) $('.go-top').addClass('active');
    if (scrolled < 400) $('.go-top').removeClass('active');
});


$('.go-top').on('click', function () {
    $("html, body").animate({
        scrollTop: "0"
    }, 50);
});


$('#navbarSupportedContent .nav-item .nav-link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

$(".scroll").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 130});
});

