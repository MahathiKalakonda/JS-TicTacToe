//const controller = require('./GameController');
//const playerObject = require('./Player');
//
//var players = [new playerObject.Player("2nd Player", 'O'), new playerObject.Player("1st Player", 'X')];
//var ticTacToeController = new controller.GameController(players);
//ticTacToeController.startGame();


turnsRemaining = 9;
function myFunction(position)
{
  var names = ["2nd Player", "1st Player"];
  var symbols = ['O' , 'X'];
  document.getElementById(position).innerHTML = symbols[turnsRemaining%2];
  turnsRemaining--;
//  ticTacToeController.play();
  document.getElementById("playerName").innerHTML = turnsRemaining>0 ? names[turnsRemaining%2] : "Game Over";
}