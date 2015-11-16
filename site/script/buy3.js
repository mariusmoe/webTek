/**
 * @author Marius Oscar Moe <mariusomoe@gmail.com>
 */

/*
 * ****** 	THIS SCRIPT USES COOKIES 	******
 * IMORTANT! Chrome disables cookies for local files. To avoid this issue the following steps can be made:
 *  - Enable cookies with the command line flag --enable-file-cookies when lunching Chrome
 *  - Use Firefox or IE or Safari
 *  - Upload the site to a server (localhost also works) or just use our uploaded version. Link will be 
 *    available together with the project hand in. 
 */


/*** 
 * -- This script emulates what a database often would have taken care of. --
 * buy3.js is responsible for our shoppingcart. It scans through the html 
 * document and gives every button with an ID listed in "allBooks" a 
 * eventListener. When one of these buttons are pushed the corresponding book 
 * will show up in the shoppingcart and stored as a cookie on the computer. 
 * This is done so that it is possible to buy books from different genres as 
 * one order.
 ***/   
var basket = []
, allBooks = ['book1', 'book2', 'book3', 'book4', 'book5', 'book6', 'book7', 'book8', 'book9', 'book10', 'book11', 'book12', 'book13', 
              'book14', 'book15', 'book16', 'book17', 'book18', 'book19', 'book20', 'book21', 'book22', 'book23', 'book24', 'book25', 
              'book26', 'book27', 'book28','book29','book30','book31','book32','book33', 'book34','book35','book36','book37','book38',
              'book39', 'book40', 'book41', 'book42']

, allBooksNames = ['The castle in the sky', 'Dragonfire', 'The unlucky robot thief', 
                   'The adventure of the asian weightlifter', 'Historen om en gammel mann', 'Bare oppfunnet', 'Ikke mer fantasi igjen', 
                   'Fantasien slår til','Annals, Anecdotes and Legends' , 'COLTER’S HELL AND JACKSON’S HOLE','Blodagenten',
                   'Labyrinten','Ninjafrosken','Dinosaurenes rike','blank','blank', 
                   'blank','Energikilden', 'Murkwood tales','Smokelands', 
                   'Blimptravelers', 'Harry Potter and the Chamber of Secrets', 'The adventure of the asian weightlifter', 
                   'Energikilden', 'Dyrenes verden', 'Tut-Tut', 'Vår første halloween', 'Bye Pi Pie', 'Andre verdenskrig', 'Learn Javascript', 
                   'Abnormal Abductions', 'Dråper i snøen', 'Skulldigger', 'Moonlight man', 'Dolled up manequinn', 'Broen mot evigheten', 
                   'Fuglene i kirketårnet', 'Skyenes skyggespill', 'Roseskandalen' , 'The chains of love', 'Timeless', 'The temple of love - ಠ_ಠ']
, books = []
, bug = true
, first = true
, selectedBooks = [];

//----------------------------------------------------------------------
var clear = document.getElementById("clear")
, tlist = document.getElementById("tlist");


clear.addEventListener('click', clearList);

var tasks = [];
//----------------------------------------------------------------------
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
	//document.getElementById("basketContent").innerHTML = "Din handlekurv er tom";
}


var temp ="";
var strBooks = "Handlekurv: <br>"
, strAlert = "";
function init(){
	for (var u = 0; u < basket.length-1; u++){
		
		strBooks += allBooksNames[basket[u]] + "<br>";
		strAlert += allBooksNames[basket[u]] + ", ";
		selectedBooks.push(allBooksNames[basket[u]]);
	}
	updateList();
}
init();
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

	//Shopping cart confirmation on the top of the screen
	document.getElementById("buyconfirm").style.visibility = "visible";

	setTimeout(function(){
		document.getElementById("buyconfirm").style.visibility = "hidden";
	}, 2200);	
} 
/**
 * print basket to screen
 */
function printToScreen(){

	for (var u = basket.length-1; u < basket.length; u++){
			
			strBooks += allBooksNames[basket[u]] + "<br>";
			strAlert += allBooksNames[basket[u]] + ", ";
			selectedBooks.push(allBooksNames[basket[u]]);
		}
		updateList();
		//document.getElementById("basketContent").innerHTML = strBooks;
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
/**
 * Instead of a real payment solution :D 
 */
function pay(){
	alert("Du har kjøpt: " + strAlert);
	clearBooks();
}






/**
 * The following methods is taken from exercise 7.2, but heavely modefied 
 */
function addTask(){

	var input = document.getElementById("newTask").value;
	
	tasks.push(input.toString());
	updateList();

	input = document.getElementById("newTask").value = "";
}

/**
 * Updates the shopping-cart/list and create a new cookie
 */
function updateList(){
	var strList = "";
	tasks = selectedBooks;
	console.log(tasks)
	var o_temp=[];
	for (var u=0; u < tasks.length; u++){
			//basket = [1,4,22,11,7]
			o_temp.push(allBooksNames.indexOf(tasks[u]));
	}

	console.log("o_temp: "+ o_temp);
	//basket = [];//odelegger
	setCookie('cbasket',"",-1);
	var o_str = "";
	for (var s=0; s < tasks.length; s++){
			//basket = [1,4,22,11,7]
			o_str = temp + o_temp.join('|');
			
		}
	console.log(o_str)
	setCookie('cbasket', o_str, 2);

	strBooks = "";
	strAlert = "";
	for (var u = 0; u < tasks.length; u++){
		
		strBooks += tasks[u] + "<br>";
		strAlert += tasks[u] + ", ";
		//selectedBooks.push(allBooksNames[basket[u]]);
	}

	//document.getElementById("basketContent").innerHTML = strBooks;


	for (var i=0;i<tasks.length;i++){
		strList += "<input type='checkbox' name='days' value='"+ tasks[i]+" ' />"+  tasks[i]+"<br>";
	}
	tlist.innerHTML = strList;
	
}

/**
 * See what is checked of in the document(checkboxes)  
 */
function clearList(){
	var taskForm = document.forms[0];
    var txt = "";
    var i;
    var index = 0;
    for (i = 0; i < taskForm.length; i++) {
        if (taskForm[i].checked) {
            txt = taskForm[i].value.toString();
            if (tasks.indexOf(taskForm[i].value)-1 == tasks.length){
            	tasks.splice(tasks.indexOf(taskForm[i].value),1)
            }
            else{
            	
            	txt = txt.substring(0, txt.length - 1);
            	for (var m=0;m<tasks.length;m++){
            		if (String(txt)==String(tasks[m])){
            			index=m;
            		} 
            	}
            	tasks.splice(index,1);
        	}
        }
    }
    selectedBooks = tasks;
    updateList();
}











