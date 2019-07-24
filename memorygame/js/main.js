

var cards = [
{
rank: 'King',
suit: 'hearts',
image: 'images/king-of-hearts.png'
},
{
rank: 'Queen',
suit: 'hearts',
image: 'images/queen-of-hearts.png'
},
{
rank: 'King',
suit: 'diamonds',
image: 'images/king-of-diamonds.png'
},
{
rank: 'Queen',
suit: 'diamonds',
images: 'images/queen-of-diamonds.png'
}
];

var cardsInPlay = [];

function checkForMatch(){
	
	if(cardsInPlay.length === 2){
		if(cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!");

		}else{
			alert("Sorry, try again");
		}
	}

}

function createBoard(){
	for(var i=0; i<cards.length; i++){
		const cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		document.getElementById("game-board").appendChild(cardElement);
		console.log("is running");
	}
}


function flipCard(){

	var data = this.getAttribute('data-id');
	//console.log("User flipped " + cards[cardId].suit);
	//console.log("User flipped " + cards[cardId].image);
	cardsInPlay.push(cards[data].rank);

	this.setAttribute("src", cards[data].image);

	checkForMatch();

}


createBoard();
