boardObject = require('./Board');
playerObject = require('./Player');

class Controller
{
    gameFinished = false;
    board = new boardObject.Board();
    players = [new playerObject.Player("2nd Player", 'O'), new playerObject.Player("1st Player", 'X')];

}

module.exports ={
Controller:Controller;
}