jQuery(document).ready(function() {
	jQuery('.mobile_nav').on('click', function(){
		console.log('hey there');
		if(jQuery(this).hasClass('active')){
			jQuery('nav').slideUp();
			jQuery(this).removeClass('active');
		}
		else{
			jQuery(this).addClass('active');
			jQuery('nav').slideDown();
		}
	})


	jQuery(window).resize(function(){
		if(jQuery(window).width()>968){
			jQuery('nav').show();
			jQuery('#toggle').removeClass('active');
		}
		else{
			jQuery('nav').hide();
		}
	});
	
});