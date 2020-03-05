boardObject = require('./Board');
playerObject = require('./Player');

class Controller
{
    gameFinished = false;
    turnsRemaining = 9;
    board = new boardObject.Board();
    players = [new playerObject.Player("2nd Player", 'O'), new playerObject.Player("1st Player", 'X')];

    startGame()
    {
        while(this.turnsRemaining > 0 && !this.gameFinished)
        {
            this.play()
        }
        this.displayResult();
        return;
    }

    play()
    {
        var position = this.takePosition();
        this.board.setSymbol(position, this.players[this.turnsRemaining%2].symbol);
        this.gameFinished = this.board.tester(position);
        this.turnsRemaining --;
    }

    takePosition()
    {
        return this.players[this.turnsRemaining%2].position;
    }

    displayResult()
    {
        this.gameFinished ? console.log(players[(turnsRemaining+1)%2] + " won") : console.log("Draw Match");
        return;
    }
}

module.exports ={
Controller:Controller
}