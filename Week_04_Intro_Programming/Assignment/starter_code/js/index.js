jQuery(document).ready(function() {

	jQuery('.readmore').on('click',function(event){
		event.preventDefault();
		jQuery('#show-this-on-click').slideDown();
		jQuery('.readmore').hide();
		jQuery('.readless').show();
	});

    jQuery('.readless').on('click',function(event){
        event.preventDefault();
        jQuery('#show-this-on-click').slideUp();
        jQuery('.readless').hide();
        jQuery('.readmore').show();
    });

	jQuery('.learnmore').on('click',function(event){
		event.preventDefault();
		jQuery('#learnmoretext').slideDown();
	});

});