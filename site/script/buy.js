/**
 * @author Marius Oscar Moe
 */

//-------emulerer hva en database typisk hadde tatt seg av-------
var basket = []
, allBooks = ['book1', 'book2', 'book3', 'book4']
, books = []
, bug = true
, first = true;

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


var temp ="";
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
	
	
} 

function print(){
	
	
	var storedBasket = getCookie('cbasket');
	console.log(storedBasket);
	var arrStored = storedBasket.split('|');
	console.log("storedBasket: " + arrStored);
}

function clearBooks(){
	basket = [];
	setCookie('cbasket',"",-1);
	location.reload();
}



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

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















