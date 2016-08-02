// var cardOne = "queen";
// var cardTwo = "queen";
// var cardThree = "king";
// var cardFour = "king";


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


// for(var i=1; i<=4; i++){
// 	var newDivs = document.createElement("div");
// 	newDivs.setAttribute("class", "card");
// 	document.getElementById("game-board").appendChild(newDivs);
// }

// function createBoard(){
// 	for(var i=1; i<=4; i++){
// 		var newCards = document.createElement("divs");
// 		newCards.setAttribute("class", "card");
// 		document.getElementById("game-board").appendChild(newCards);
// 	}
// }

// createBoard();



var cards = ["queen", "queen", "king", "king"];

var cardsInPlay = [];

var board = document.getElementById("game-board");


function createBoard(){
	for(var i=0; i<cards.length; i++){
		var cardElement = document.createElement("divs");
		cardElement.className = "card";
		cardElement.setAttribute("data-card", cards[i]);
		cardElement.addEventListener("click", isTwoCards);
		// document.getElementById("game-board").appendChild(cardElements);
		board.appendChild(cardElement);
    	board.appendChild(cardElement);
	}
}


function isTwoCards(){
	cardsInPlay.push(this.getAttribute("data-card"));
	console.log(this.getAttribute("data-card"));
	if (this.getAttribute("data-card") === "king") {
		this.innerHTML = "<img src='http://i.imgur.com/Ckx55I2.jpg'>";
  	} else {
		this.innerHTML = "<img src='http://i.imgur.com/M7VgyAp.jpg'>"; 
	}
	if(cardsInPlay.length === 2){
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

function isMatch (cards){
	// if(cards[0] === cards[1] || cards[2] === cards[3]){
	if(cards[0] === cards[1]){
 	alert("You found a match!");
	} else {
	alert("Sorry, try again.");
	}
}


createBoard();

