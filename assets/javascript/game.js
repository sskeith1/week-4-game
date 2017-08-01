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

	function jemRand()	{
		blue = Math.round (Math.random() * (12 - 1) +1);
		green = Math.round (Math.random() * (12 - 1) +1);
		pink = Math.round (Math.random() * (12 - 1) +1);
		red = Math.round (Math.random() * (12 - 1) +1);
	}

//Targets (The random number the player is trying to hit)
	var target = 0;

	function targetRand () {
		target = Math.round (Math.random() * (120 - 19) + 19);
	};


//Reset all
	function reset() {
		blue = 0;
		green = 0;
		pink = 0;
		red = 0;

		score = 0;
		target = 0;
	};

//Update
	function update() {
		$("#win").html("Wins: " + wins)
		$("#loss").html("Losses: " + losses)
		$("#guessbox").html("" + target)
		$("#numbox").html("Your Total score is: " + score)
	}

//Winning/Losing
	//Hint with styling
		function almost(){
			if (		score + blue == target || score + green == target||
						score + pink == target || score + red == target) {
				document.getElementById("numbox").style.background = "green";
			} 
			else if (	score + blue > target || score + green > target||
						score + pink > target|| score + red > target) {
				document.getElementById("numbox").style.background = "red";
			}};

	//Winning protocol
		function winner () {
			alert ("You are a winner!");
			wins++;
			update();
			reset();

		};
	//Losing protocol
		function loser () {
			alert ("You are a loser!");
			losses++;
			update();
			reset();
		};

	//Initiate Winning/Losing protocol
		function result() {
			if (score > 0 && score == target) {
			winner();
			gameStart();
		} else if (score > 0 && score > target) {

			loser();
			gameStart();
		}};
	





	
	
	
//@Game Start
	function gameStart () {
		reset();
		jemRand();
		targetRand();
		update();
		document.getElementById("numbox").style.background = "white";
	};

//========================================================================================
//========================================================================================

//Game Play
gameStart();

	$("#blue").on("click", function(){
		score = score + blue;
		update();
		console.log("blue: " + blue);
		almost();
		result();
	});


	$("#green").on("click", function(){
		score = score + green;
		update();
		console.log("green: " + green);
		almost();
		result();
	});


	$("#pink").on("click", function(){
		score = score + pink;
		update();
		console.log("pink: " + pink);
		almost();
		result();
	});


	$("#red").on("click", function(){
		score = score + red;
		update();
		console.log("red: " + red);
		almost();
		result();
	});
	

});