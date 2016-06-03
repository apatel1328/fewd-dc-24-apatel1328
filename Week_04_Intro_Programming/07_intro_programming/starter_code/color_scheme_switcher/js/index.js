// Click on Grey Button
	//call the function changeToGrey
document.getElementById ("grayButton").onclick = changeToGray;

// Click on White Button
	//call the function changeToWhite
document.getElementById ("whiteButton").onclick = changeToWhite;

function changeToGray() {
	// Change background color gray
	document.body.style.backgroundColor = "gray";
	// Change text color white 
	document.body.style.color = "white";
	// body...
} // end changeToGrey()

function changeToWhite() {
	// Change background color to white
	document.body.style.background = "white";
	// Change text color to black
	document.body.style.color = "black";
	// body...
} // end changeToGrey()
