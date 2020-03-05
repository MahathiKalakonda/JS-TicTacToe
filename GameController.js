boardObject = require('./Board');
playerObject = require('./Player');

class Controller
{
    gameFinished = false;
    turnsRemaining = 9;
    board = new boardObject.Board();
    players = [new playerObject.Player("2nd Player", 'O'), new playerObject.Player("1st Player", 'X')];

    function startGame()
    {
        while(turnsRemaining > 0 && !gameFinished)
        {
            var position = takePosition();
            board.setSymbol(position, players[turnsRemaining+%2].symbol);
            gameFinished = board.tester(position);
            turnsRemaining --;
        }
        displayResult();
    }

    function takePosition()
    {
        return players[turnsRemaining%2].position;
    }

    function displayResult()
    {
        gameFinished ? console.log(players[(turnsRemaining+1)%2] + " won") : console.log("Draw Match");
    }
}

module.exports ={
Controller:Controller;
}