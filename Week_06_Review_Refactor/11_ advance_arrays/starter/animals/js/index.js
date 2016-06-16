var images = ["images/animal1.jpg", "images/animal2.jpg", "images/animal3.jpg", "images/animal4.jpg", "images/animal5.jpg", "images/animal6.jpg", "images/animal7.jpg"];
var i = 0;
var imageSetLength = images.length-1;


function changeImage(index){
	//sets a patricular image
	jQuery('#image-to-vote-on').attr('src', images[index]);
}

function nextImage(){
	//next image in set
	if(i < imageSetLength){
		i++;
	}
	else{
		i=0;
	}
	changeImage(i);
}

function prevImage(){
	//previous image in set
	if(i == 0){
		i = imageSetLength;
	}
	else{
		i--;
	}
	changeImage(i);
}


//Bind functions to buttons



jQuery('#back').click(prevImage)
jQuery('#next').click(nextImage)
