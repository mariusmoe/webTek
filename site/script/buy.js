/**
 * @Author Marius Oscar Moe
 */

var basket = []
, allBooks = ['book1', 'book2']
, books = [book1,book2];

for (var i = 0; i < allBooks.length; i++) {
	    books[i] = document.getElementById(allBooks[i])
	}
for (var j = 0; j < allBooks.length; j++) {
	    books[j].addEventListener('click', function() { addToBasket(allBooks[j]) });
	}
function addToBasket(book){
	basket.push(book);
	
	for (var i = 0; i < basket.length; i++) {
	    console.log(basket[i]);
	}

} 