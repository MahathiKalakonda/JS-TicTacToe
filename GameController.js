boardObject = require('./Board');
playerObject = require('./Player');

class Controller
{
    constructor()
    {
        gameFinished = false;
        turnsRemaining = 9;
        board = new boardObject.Board();
        players = [new playerObject.Player("2nd Player", 'O'), new playerObject.Player("1st Player", 'X')];
    }

    startGame()
    {
        //this.board.board = 'something'
        while(this.turnsRemaining > 0 && !this.gameFinished)
        {
            this.play()
        }
        this.displayResult();
        return 0;
    }

    play()
    {
        var position = this.takePosition();
        this.board.setSymbol(position, this.players[this.turnsRemaining%2].getSymbol());
        this.gameFinished = this.board.tester(position, this.players[this.turnsRemaining%2].symbol);
        this.turnsRemaining --;
    }

    takePosition()
    {
        return this.players[this.turnsRemaining%2].getPosition();
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