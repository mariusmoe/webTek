var smallwidth = 146;
var smallheigth = 235;
var bigwidth = 584;
var bigheigth = 940;

function toggleScale(id){
	var element = document.getElementById(id);
	if (element.width == smallwidth) {
		element.width = bigwidth;
		element.height = bigheigth;
	}
	else {
		element.width = smallwidth;
		element.height = smallheigth;
	}
}