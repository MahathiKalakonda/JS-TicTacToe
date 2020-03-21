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
        this.updateStatus(turnsRemaining);
    }

    updateStatus(turnsRemaining)
    {
        this.gameFinished || turnsRemaining == 1 ? this.updateFinalStatus(turnsRemaining) : this.updateCurrentPlayer(turnsRemaining);
        this.updateScores(turnsRemaining);
        this.highlightWinningPattern();
    }

    updateFinalStatus(turnsRemaining)
    {
        var finalStatus = this.gameFinished ? this.players[turnsRemaining%2].name+" won" : "Draw Match";
        this.inputAndOutput.displayFinalStatus(finalStatus);
    }

    updateCurrentPlayer(turnsRemaining)
    {
        this.inputAndOutput.displayCurrentPlayer(this.players[(turnsRemaining+1)%2].name);
    }

    updateScores(turnsRemaining)
    {
        if(this.gameFinished)
            scores[turnsRemaining%2]++;
        this.inputAndOutput.displayUpdatedScore(this.players[turnsRemaining%2].name, scores[turnsRemaining%2]);
    }

    highlightWinningPattern()
    {
        this.inputAndOutput.highlightBackground(this.board.getWinningCondition());
    }

    getGameFinished()
    {
        return this.gameFinished;
    }

    resetDisplay()
    {
        this.inputAndOutput.emptyBoard();
        this.inputAndOutput.resetPlayerStatus();
    }

    getBoard()
    {
        return this.inputAndOutput.getGameBoard();
    }
}