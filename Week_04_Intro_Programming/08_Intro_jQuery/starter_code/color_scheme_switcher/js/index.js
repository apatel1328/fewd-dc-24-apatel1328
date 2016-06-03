// document.getElementById('grayButton').onclick = switchGray;
// document.getElementById('whiteButton').onclick = switchWhite;

// function switchGray() {
//   document.body.style.backgroundColor = 'gray';
//  document.body.style.color = 'white';
// }

// function switchWhite() {
//   document.body.style.backgroundColor = 'white';
//   document.body.style.color = 'black';
// }



jQuery('#grayButton').on('click', function(){
	jQuery('body').css({
		'background-color': 'gray',
		'color': 'white'
	});
});

jQuery('#whiteButton').on('click', function(){
	jQuery('body').css({
		'background-color': 'white',
		'color': 'black'
	});
});

