var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";


// if(cardOne === cardTwo || cardThree === cardFour){
// 	alert("You found a match!");
// } else {
// 	alert("Sorry, try again.");
// }

// if(cardOne === cardTwo || cardThree === cardFour){
// 	alert("You found a match!");
// } else if(cardOne === cardThree || cardOne === cardFour){
// 	alert("Sorry, try again.");
// } else if (cardTwo === cardThree || cardTwo === cardFour){
// 	alert("Sorry, try again.");
// } else {
// 	alert("Plese pick your cards.");
// }


var gameBoard = document.getElementById("game-board");

// for(var i = 1; i <= 4; i++){
// 	var newDivs = document.createElement("div");
// 	newDivs.setAttribute("class", "card");
// 	document.getElementById("game-board").appendChild(newDivs);
// }

function createdBoard(){
	for(var i = 1; i <= 4; i++){
		var newCards = document.createElement("divs");
		newCards.setAttribute("class", "card");
		document.getElementById("game-board").appendChild(newCards);
	}
}

createdBoard();