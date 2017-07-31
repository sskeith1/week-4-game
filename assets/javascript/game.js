
//Variables
	var wins = 0;
	var losses = 0;
	var score = 0;
	var jemnum = 0;
	var jemrand = Math.round (Math.random() * (12 - 1) +1);
	var targetnum = 0;
	var targetrand = Math.round (Math.random() * (120 - 19) + 19);


alert("Are we ready to play?");
	if($(this).confirm () == true) {
		console.log(targetrand);
	};
		


$(document).on("click", "styledimg", function() {
	if($(this).hasClass("styledimg")) {
		console.log(jemrand);
}});