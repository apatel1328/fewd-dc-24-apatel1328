function compare(){
	if(jQuery('#a').val() > jQuery('#b').val()){
		jQuery('#comparison').html('>');
	}

	else if (jQuery('#a').val() < jQuery('#b').val()){
		jQuery('#comparison').html('<');
	}
	else {
		jQuery('#comparison').html('=');
	}

}

jQuery('#submit').click(compare);