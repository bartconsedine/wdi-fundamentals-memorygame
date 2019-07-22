console.log("Up and running!");




var cards = ["queen","queen","king","king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];

console.log("user flipped " + cardOne);
console.log("user flipped " + cardTwo);

cardsInPlay.push(cardOne);

console.log(cardsInPlay);

cardsInPlay.push(cardTwo);

if(cardsInPlay.length === 2){
	if(cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");

	}else{
		alert("Sorry, try again");
	}
}