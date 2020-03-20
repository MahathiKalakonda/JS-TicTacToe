class GameController
{
    constructor(players)
    {
        this.gameFinished = false;
        this.board = new Board();
        this.players = players;
        this.inputAndOutput = new InputAndOutput();
    }

    play(position, turnsRemaining)
    {
        this.inputAndOutput.displaySymbol(position, this.players[turnsRemaining%2].getSymbol());
        this.gameFinished = this.board.isGameFinished(position, this.players[turnsRemaining%2].symbol);
        return;
    }

    getGameFinished()
    {
        return this.gameFinished;
    }

    getFinalStatus(turnsRemaining)
    {
        return this.gameFinished ? this.players[(turnsRemaining+1)%2].name+" won" : "Draw Match";
    }

    getCurrentPlayer(turnsRemaining)
    {
        return this.players[turnsRemaining%2].name;
    }

    updateScores(turnsRemaining)
    {
        if(this.gameFinished)
            scores[(turnsRemaining+1)%2]++;
        this.inputAndOutput.displayUpdatedScore(this.players[(turnsRemaining+1)%2].name, scores[(turnsRemaining+1)%2]);
    }

    highlightWinningPattern()
    {
        var winningCondition = this.board.getWinningCondition();
        this.inputAndOutput.highlightBackground(winningCondition);
    }

    resetDisplay()
    {
        this.inputAndOutput.emptyBoard();
        this.inputAndOutput.resetPlayerStatus();
    }
}