/**
<<<<<<< HEAD
 *This script toggles an image between two sizes.
 *@author Sondre Kristensen
 *@version 1.0
 *@since 16/11-2015
 */

=======
FILE NAME: scipt/size.js
WRITTEN BY:Sondre Kristensen
WHEN: November 2015
PURPOSE: Forstørrer bestemte bilder
*/
>>>>>>> 215a0edb214213564f8e6817ba092edf320e400a
var smallwidth = 146;
var smallheigth = 235;
var bigwidth = 584;
var bigheigth = 940;

/**
*This function takes the id of an image and toggles between sizes in width and height.
*@param id The id of an element.
*/
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