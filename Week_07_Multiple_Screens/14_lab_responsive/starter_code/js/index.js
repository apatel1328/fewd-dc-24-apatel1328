jQuery(document).ready(function() {
	jQuery('.mobile-nav').on('click', function(){
		if(jQuery(this).hasClass('active')){
			jQuery('.navigation').slideUp();
			jQuery(this).removeClass('active');
		}
		else{
			jQuery(this).addClass('active');	
			jQuery('.navigation').slideDown();
		}
	});
	
	jQuery(window).resize(function(){
	if (jQuery(window).width() > 796) {
		jQuery('.navigation').show();
		jQuery('#toggle').removeClass('active');
	}
	else{
		jQuery('.navigation').hide();
	}

	});

});
