/**
 * @author Marius Oscar Moe
 */

//-------emulerer hva en database typisk hadde tatt seg av-------
var basket = []
, allBooks = ['book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7', 'book8' ]
, allBooksNames = ['sherlock', 'havfruen', 'hesten', 'billa', 'gammeln', 'boka', 'book7', 'boken om alt']
, books = []
, bug = true
, first = true;

/*
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

/*
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
/*
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
	
	
	for (var u = basket.length-1; u < basket.length; u++){
		
		strBooks += allBooksNames[basket[u]] + "<br>";
		strAlert += allBooksNames[basket[u]] + ", ";
	}
	
	document.getElementById("basketContent").innerHTML = strBooks;
	//document.getElementById("basketContent").innerHTML = basket[0];
	
	
} 
/*
 * @return arrSored		a array of the books in the basket 
 */
function print(){
	var storedBasket = getCookie('cbasket');
	console.log(storedBasket);
	var arrStored = storedBasket.split('|');
	console.log("storedBasket: " + arrStored);
	return arrStored;
}

/*
 * clears the cookie with the books ready for purchase and the array containing the same
 */
function clearBooks(){
	basket = [];
	setCookie('cbasket',"",-1);
	location.reload();
}


/*
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

/*
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















