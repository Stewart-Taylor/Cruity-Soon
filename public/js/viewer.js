$(document).ready(function() {
	fetchPoints();
});

function fetchPoints() {

	var game_id = getRandomGame();

	$.ajax({
		type: 'GET',
		url: 'http://162.243.151.91/drawings/' + game_id,
		dataType: "json",
		success: function(response) {

			game = response;
			drawAllPoints();
		}
	});
}


function getRandomGame()
{
	//TODO: Get random game logic
	return 1;
}

function drawAllPoints() {
	
	var c = document.getElementById("drawCanvas");
	var ctx = c.getContext("2d");

	var prevX = 0;
	var prevY = 0;
	var is_end = true;


	var width = 500;
	var height = 500;

	for (var i = 0; i < game.points.length; i++) {
		var realLastX = prevX * width;
		var realLastY = prevY * height;
		var nowX = game.points[i].x * width;
		var nowY = game.points[i].y * height;


		if (is_end == false) {

			ctx.beginPath();
			ctx.moveTo(realLastX, realLastY);
			ctx.lineTo(nowX, nowY);
			ctx.stroke();

			prevX = game.points[i].x;
			prevY = game.points[i].y;
		} else {
			is_end = false;
			prevX = game.points[i].x;
			prevY = game.points[i].y;
		}
	}
}



function startDrawing() {
	var c = document.getElementById("drawCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(300, 150);
	ctx.stroke();
}