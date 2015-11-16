/**
FILE NAME: scipt/slideshow.js
WRITTEN BY: Hung Thieu
WHEN: November 2015
PURPOSE:  Lager en slideshow til hovedsiden 
*/
addEventListener("load", interval);

var imageCounter = 1;
var total = 3;

/**
* This function changes photo by upping the 
* image counter by one, so for this to work without 
* changing the code, the pictures in this slide have to have 
* the names slide+(number)
*/
function photoSlideshow(){
	var image = document.getElementById("image");
	imageCounter++;
	if(imageCounter > total){
		imageCounter = 1;
	}
	image.src = "../images/slide" + imageCounter + ".jpg";
}

/**
* This function changes the photo by upping the
* image counter by one.
* The difference between this and photoSlideshow() is that
* this one takes in a parameter
* @param i i is the counter number (int)
*/
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

/**
* This function sets an interval to change the
* picture every 5 seconds (runs photoSlideshow() every 5 seconds)
*/
function interval(){
	window.setInterval(photoSlideshow, 8000);
}