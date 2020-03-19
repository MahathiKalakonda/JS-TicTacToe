class GameController
{
    constructor(players)
    {
        this.gameFinished = false;
        this.board = new Board();
        this.players = players;
    }

    play(position,turnsRemaining)
    {
        this.board.setSymbol(position, this.players[turnsRemaining%2].getSymbol());
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
        var winner = this.gameFinished ? this.players[(turnsRemaining+1)%2].name : "No Winner";
        if(winner !== "No Winner")
            scores[(TurnsRemaining+1)%2]++;
        document.getElementById(winner).innerHTML = winner + " : " + scores[(TurnsRemaining+1)%2];
    }
}