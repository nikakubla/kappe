
$(document).ready(function($) {
	
    var toggleInfo = $('.info-toggle'),
		toggleNavbar = $('.navbar-right');

	toggleInfo.on('click', function(e){
		e.preventDefault();

		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			toggleNavbar.addClass('active');
		} else {
			$(this).removeClass('active');
			toggleNavbar.removeClass('active');				
		}
	});
});

$(document).ready(function($) {
	
    var toggleInfo = $('.burger'),
		toggleNavbar = $('.menu');

	toggleInfo.on('click', function(e){
		e.preventDefault();
			

		if ( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			toggleNavbar.addClass('active');
			

		} else {
			$(this).removeClass('active');
			toggleNavbar.removeClass('active');				
			
			
		}
	});


});


