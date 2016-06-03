jQuery(document).ready(function(){

    
    // When purple box is clicked, set all paragraphs to be purple
    jQuery('#purpleBox').on('click', function(){
    	jQuery('.changes').css('color', 'purple');
    });

    // When the blue box is clicked set the hipster paragraph to have white text with a blue background.  All other paragraphs should be black
    jQuery('#blueBox').on('click', function(){
    	jQuery('p').css('color', 'black');
    	jQuery('.hipsterSpeak').css({
    		'background-color': 'blue',
    		'color': 'white'
    	});
    	jQuery('li').css({
    		'color': 'black',
    		'background-color': 'white'
    	});
    });

    // When the red box is clicked set the list items toggle red background and white text on and off
    
    jQuery('#redBox').on('click', function(){
    	jQuery('li').toggleClass('.hipsterSpeak')
    	jQuery('li').css({
    		'background-color': 'red',
    		'color': 'white'
    	});
    });
    

    // When any of the boxes are clicked, add a 6px solid black bottom border
    jQuery('.boxes').on('click', function() {
    	jQuery('.boxes').css('border-bottom', '6px solid black');
    });

});
