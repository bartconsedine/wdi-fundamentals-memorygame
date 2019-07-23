

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
			console.log("You found a match!");

		}else{
			console.log("Sorry, try again");
		}
	}

}


function flipCard(cardId){

	console.log("User flipped " + cards[cardId].rank);
	console.log("User flipped " + cards[cardId].suit);
	console.log("User flipped " + cards[cardId].image);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();

}


flipCard(0);
flipCard(2);





