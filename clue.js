var cluedo = {
	suspects: [
		{name: "Jacob Green", color: "green"},
		{name: "Dcotor Orchid", color: "white"},
		{name: "Victor Plum", color: "purple"},
		{name: "Kasandra Scarlet", color: "red"},
		{name: "Eleanor Peacock", color: "blue"},
		{name: "Jack Mustard", color: "yellow"}
	],
	weapons: [
		{name: "a Rope", },
		{name: "a Knife", },
		{name: "a Candlestick", },
		{name: "a Dumbbell", },
		{name: "a Poison", },
		{name: "an Axe", },
		{name: "a Bat", },
		{name: "a Trophype", },
		{name: "a Pistol"}
	],
	houseRooms: [
		{name: "Dining room",},
		{name: "Conservatory",},
		{name: "Kitchen",},
		{name: "Study",},
		{name: "Library",},
		{name: "Billiard room",},
		{name: "Lounge",},
		{name: "Ballroom",},
		{name: "Hall",},
		{name: "A spa",},
		{name: "Living room",},
		{name: "Observatory",},
		{name: "Theater",},
		{name: "Guest house",},
		{name: "A patio"},
	]
}

function selectRandom(stack){
	 randomNum = Math.floor(Math.random()*(stack.length-0) + 0)
	var selectedCard = stack[randomNum];
	return selectedCard;

} 


function pickCards(){

	var arr = []

	arr.push(selectRandom(cluedo.suspects), 
		selectRandom(cluedo.weapons), 
		selectRandom(cluedo.houseRooms) );

	return arr;
}


var criminal = pickCards();


function revealCriminal() {
	console.log("It turns out that the murderer was " + criminal[0].name +"\n"
	+ "He killed his victim with " + criminal[1].name + " on the " + criminal[2].name) ;
}



//Function that chooses the cards for the players

    //console.log(pickCards());


//Function to reveal the criminal 


revealCriminal();
