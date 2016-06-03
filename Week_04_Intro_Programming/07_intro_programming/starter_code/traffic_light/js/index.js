
document.getElementById('stopButton').onclick = illuminateRed;

document.getElementById('slowButton').onclick = illuminatePurple;

document.getElementById('goButton').onclick = illuminateGreen;


//illuminate red

function illuminateRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

//illuminate purple


function illuminatePurple() {
	clearLights();
	document.getElementById('slowLight').style.backgroundColor = "purple";
}

//illuminate green


function illuminateGreen() {
	clearLights ();
	document.getElementById('goLight').style.backgroundColor = "green";
}

//clear lights
function clearLights() {
	// this does the same thing as the below.... jquery(".bulb").css("background-color",black);
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}

