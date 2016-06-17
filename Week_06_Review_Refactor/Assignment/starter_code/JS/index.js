var city = ["NYC", "SF", "LA", "ATX", "SYD"];

jQuery(document).ready(function() {
	for(i = 0; i < city.length; i++){
		jQuery('#city-type').append('<option value="' + city[i] + '">' + city[i] + '</option>');
	}
	jQuery('form').on('change', '#city-type', function(){
		var choice = jQuery('#city-type').val();
		if(choice == "NYC"){
			jQuery('body').attr('class', 'nyc');
		}
		else if(choice == "SF"){
			jQuery('body').attr('class', 'sf');
		}
		else if(choice == "LA"){
			jQuery('body').attr('class', 'la');
		}
		else if(choice == "ATX"){
			jQuery('body').attr('class', 'austin');
		}
		else if(choice == "SYD"){
			jQuery('body').attr('class', 'sydney');
		}
	})
});

