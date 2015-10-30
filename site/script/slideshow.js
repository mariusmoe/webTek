addEventListener("load", interval);

var imageCounter = 1;
var total = 3;

/**
*
*/
function photoSlideshow(){
	var image = document.getElementById("image");
	imageCounter++;
	if(imageCounter > total){
		imageCounter = 1;
	}
	image.src = "../images/slide" + imageCounter + ".jpg";
}

function photo(i){
	var image = document.getElementById("image");
	imageCounter+=i;
	if(imageCounter > total){
		imageCounter = 1;
	}
	if(imageCounter < 1){
		imageCounter = total;
	}
	image.src = "../images/slide" + imageCounter + ".jpg";
}

function interval(){
	window.setInterval(photoSlideshow, 5000);
}