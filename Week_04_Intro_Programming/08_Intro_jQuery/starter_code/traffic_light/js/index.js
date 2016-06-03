//Implement the red light using jQuery. Don't forget to add the script tags.

//because it was loaded in the head and not the body, it has to have a ready function which wraps it
jQuery(document).ready(function(){
	//illuminateRed

	jQuery('#stopButton').on('click', function() {

		jQuery('.bulb').css('background-color','black');
		jQuery('#stopLight').css('background-color', 'red');
	});


	//illuminatePurple
	jQuery('#slowButton').on('click', function() {
		jQuery('.bulb').css('background-color','black');
		jQuery('#slowLight').css('background-color', 'purple');
	});



	//illuminateGreen

	jQuery('#goButton').on('click', function() {
		jQuery('.bulb').css('background-color','black');
		jQuery('#goLight').css('background-color', 'green');
	});

});
