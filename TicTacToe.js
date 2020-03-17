controller = require('./GameController');
const playerObject = require('./Player');

var players = [new playerObject.Player("2nd Player", 'O'), new playerObject.Player("1st Player", 'X')];
var ticTacToeController = new controller.GameController(players);
ticTacToeController.startGame();