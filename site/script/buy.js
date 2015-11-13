/**
 * @author Marius Oscar Moe
 */

//-------emulerer hva en database typisk hadde tatt seg av-------
var basket = []
, allBooks = ['book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7', 'book8', 'book9', 'book10', 'book11', 'book12', 'book13', 'book14', 'book15', 'book16', 'book17', 'book18', 'book19', 'book20', 'book21', 'book22', 'book23', 'book24', 'book25', 'book26', 'book27', 'book28','book29','book30']
, allBooksNames = ['Lord of The Rings: The fellowship of The Ring', 'The Hobbit', 'The unlucky robot thief', 'The adventure of the asian weightlifter', 'Historen om en gammel mann', 'Bare oppfunnet', 'Ikke mer fantasi igjen', 'Fantasien slår til',
                   'Annals, Anecdotes and Legends' , 'COLTER’S HELL AND JACKSON’S HOLE','The Hunger Games','The Hunger Games - Catching Fire','The Hunger Games - Mockingjay'
                   ,'The Maze Runner','Da Vinci Koden','Divergent', 'Divergent','Energikilden', 'Lord of The Rings: Two Towers','Lord of The Rings: The return of The King', 'Harry Potter and the Sorcerers Stone', 'Harry Potter and the Chamber of Secrets'
                   , 'The adventure of the asian weightlifter', 'Energikilden', 'Dyrenes verden', 'Tut-Tut', 'Vår første halloween', 'Bye Pi Pie', 'Andre verdenskrig', 'Learn Javascript']
, books = []
, bug = true
, first = true;

/**
 * get all the buy buttons and add them to a array
 * hacky solution because ECMAscript is derp and on runtime :(  
 */
for (var i = 0; i < allBooks.length; i++) {
	(function () {
		try {
			books[i] = document.getElementById(allBooks[i]);
		}
		catch (e) {
			consol.log(e);
		}
	}())
	}
if (bug){
	console.log(books);
}

/**
 * not exactly a method :D
 * add a eventlistener to every button
 */
for (var j = 0; j < allBooks.length; j++) {
	(function (j) {
		try{
			books[j].addEventListener('click', function() { addToBasket(j); }, false);
		}
		catch (e) {
			console.log(e);// TODO: handle exception
		}
	
	}(j))
}
if (bug){
	console.log(books);
}



var stored = getCookie('cbasket');
if (stored){
	basket = stored.split('|');
}
else{
	document.getElementById("basketContent").innerHTML = "Din handlekurv er tom";
}


var temp ="";
var strBooks = "Handlekurv: <br>"
, strAlert = "";
for (var u = 0; u < basket.length; u++){
	
	strBooks += allBooksNames[basket[u]] + "<br>";
	strAlert += allBooksNames[basket[u]] + ", ";
}
if (basket.length>0){
	printToScreen();
}
/**
 * adds the selected book to a array containing all the selected books and create a cookie 
 * containing the same information.
 * Method also change the text in the selected button 
 * @param book		the selected book 
 */
function addToBasket(book){
	basket.push(book);
	
	if (bug){
		console.log("basket: ")
		for (var i = 0; i < basket.length; i++) {
		    console.log(basket[i]);
		    /*console.log(typeof basket[i]);*/
		}
		console.log("------End--------- ")
	}
	
	var j_str = JSON.stringify(basket)
	setCookie('basket', j_str, 2);
	
	
	
	var m_str =temp + basket.join('|');
	setCookie('cbasket', m_str, 2);
	
	books[book].innerHTML = "Kjøp en til";
	
	
	printToScreen();
	//document.getElementById("basketContent").innerHTML = basket[0];	
} 
/**
 * print basket to screen
 */
function printToScreen(){

	for (var u = basket.length-1; u < basket.length; u++){
			
			strBooks += allBooksNames[basket[u]] + "<br>";
			strAlert += allBooksNames[basket[u]] + ", ";
		}
		
		document.getElementById("basketContent").innerHTML = strBooks;
}



/**
 * @return arrSored		a array of the books in the basket 
 */
function print(){
	var storedBasket = getCookie('cbasket');
	console.log(storedBasket);
	var arrStored = storedBasket.split('|');
	console.log("storedBasket: " + arrStored);
	return arrStored;
}

/**
 * clears the cookie with the books ready for purchase and the array containing the same
 */
function clearBooks(){
	basket = [];
	setCookie('cbasket',"",-1);
	location.reload();
}


/**
 * method is taken from w3s's examples and is free to use.
 * stores a cookie locally on the clients machine 
 * @param cname		name of the cookie to be created
 * @param cvalue	value to put in cookie
 * @param exdays	days until the cookie will expire (be deleted)
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

/**
 * method is taken from w3s's examples and is free to use.
 * retries the cookie created by setCookie()
 * @param cname		name of the cookie to be retrieved. 
 */
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    console.log("Not found");
    return "";
}

function pay(){
	alert("Du har kjøpt: " + strAlert);
}















