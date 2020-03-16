boardObject = require('./Board');
playerObject = require('./Player');

class Controller
{
    constructor()
    {
        this.gameFinished = false;
        this.turnsRemaining = 9;
        this.board = new boardObject.Board();
        this.players = [new playerObject.Player("2nd Player", 'O'), new playerObject.Player("1st Player", 'X')];
    }

    startGame()
    {
        while(this.turnsRemaining > 0 && !this.gameFinished)
        {
            this.play()
        }
        this.displayResult();
        return 0;
    }

    play()
    {
        var position = this.players[this.turnsRemaining%2].getPosition();
        this.board.setSymbol(position, this.players[this.turnsRemaining%2].getSymbol());
        this.gameFinished = this.board.isGameFinished(position, this.players[this.turnsRemaining%2].symbol);
        this.turnsRemaining --;
    }

    displayResult()
    {
        this.gameFinished ? console.log(this.players[(this.turnsRemaining+1)%2].getName() + " won") : console.log("Draw Match");
        return 0;
    }
}

module.exports ={
Controller:Controller
}