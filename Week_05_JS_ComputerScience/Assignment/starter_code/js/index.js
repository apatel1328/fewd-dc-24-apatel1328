jQuery(document).ready(function() {
	
	function cityInput(){
		
		event.preventDefault();
		jQuery('#city-type').val();
		var cityName = jQuery('#city-type').val();
		cityName = cityName.toLowerCase().trim();

		if(cityName == 'new york city' || cityName == 'nyc'){
			jQuery('body').attr('class', 'nyc');
		}
		else if(cityName == 'san francisco' || cityName == 'san fran'){
			jQuery('body').attr('class', 'sf');
		}
		else if(cityName == 'los angeles' || cityName == 'la'){
			jQuery('body').attr('class', 'la');
		}
		else if(cityName == 'austin'){
			jQuery('body').attr('class', 'austin');
		}
		else if(cityName == 'sydney'){
			jQuery('body').attr('class', 'sydney');
		}
		else {
			window.alert("You've entered an incorrect value. Try NYC/SF/Austin/Sydney/LA");
		}
		jQuery('#city-type').val('');
	}


	jQuery('#submit-btn').click(cityInput);


});
