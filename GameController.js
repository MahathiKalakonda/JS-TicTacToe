const boardObject = require('./Board');
const playerObject = require('./Player');
const inputAndOutputObject = require('./consoleAndPrompt');

class GameController
{
    constructor(players)
    {
        this.gameFinished = false;
        this.turnsRemaining = 9;
        this.promptAndDisplay = new inputAndOutputObject.consoleAndPrompt();
        this.board = new boardObject.Board();
        this.players = players;
    }

    startGame()
    {
        while(this.turnsRemaining > 0 && !this.gameFinished)
        {
            this.play()
        }
        this.promptAndDisplay.displayResult(this.players[(this.turnsRemaining+1)%2].getName(), this.gameFinished);
        return 0;
    }

    play()
    {
        var position = this.promptAndDisplay.getPosition(this.players[this.turnsRemaining%2].getName());
        this.board.setSymbol(position, this.players[this.turnsRemaining%2].getSymbol());
        this.promptAndDisplay.displayBoard(this.board.board);
        this.gameFinished = this.board.isGameFinished(position, this.players[this.turnsRemaining%2].symbol);
        this.turnsRemaining --;
    }

}

module.exports ={
GameController:GameController
}