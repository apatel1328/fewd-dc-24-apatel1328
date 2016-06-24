jQuery(document).ready(function() {
	jQuery('.mobile_nav').on('click', function(){
		if(jQuery(this).hasClass('active')){
			jQuery('nav').slideUp();
			jQuery(this).removeClass('active');
		}
		else{
			jQuery(this).addClass('active');
			jQuery('nav').slideDown();
		}
	});

	jQuery(window).resize(function(){
	if (jQuery(window).width() > 768) {
		jQuery('nav').show();
		jQuery('#toggle').removeClass('active');
	}
	else{
		jQuery('nav').hide();
	}

	});

});


