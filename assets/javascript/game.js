$(document).ready(function() {
//Variables (Score = the user score with every + jem)
	var wins = 0;
	var losses = 0;
	var score = 0;

//Jems	
	var blue = 0;
	var green = 0;
	var pink = 0;
	var red = 0;

	function jemrand()	{
		blue = Math.round (Math.random() * (12 - 1) +1);
		green = Math.round (Math.random() * (12 - 1) +1);
		pink = Math.round (Math.random() * (12 - 1) +1);
		red = Math.round (Math.random() * (12 - 1) +1);
	}

//Targets (The random number the player is trying to hit)
	var targetrand = 0;

	function target () {
		targetrand = Math.round (Math.random() * (120 - 19) + 19);
	};


//reset all
	function reset() {
		blue = 0;
		green = 0;
		pink = 0;
		red = 0;

		score = 0;
		targetrand = 0;
	}

//update
	function update() {
		$("#win").html("Wins: " + wins)
		$("#loss").html("Losses: " + losses)
		$(".guessbox").html("" + targetrand)
		$(".numbox").html("Your Total score is: " + score)
	}


//Game
	update();

	$("blue").on("click", function(){
		alert("hi");
	});
console.log()
});