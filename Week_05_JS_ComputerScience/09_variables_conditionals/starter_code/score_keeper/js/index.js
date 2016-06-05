var total = 0

function clear(){
	total = 0;
	jQuery('#result').html(total);
}

function plus5(){
	total = total + 5;
	jQuery('#result').html(total);
}

function plus10(){
	total = total + 10;
	jQuery('#result').html(total);
}

function min1(){
	total = total - 1;
	jQuery('#result').html(total);
}

jQuery(document).ready(function() {
	jQuery('#zero').click(clear);
	jQuery('#add5').click(plus5);
	jQuery('#add10').click(plus10);
	jQuery('#sub1').click(min1);
});
