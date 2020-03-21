class Board
{
    constructor()
    {
        this.winningCondition = [];
        this.conditions = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
        this.status = false;
    }

    getBoard()
    {
        var ticTacToeController = new GameController();
        return ticTacToeController.getBoard();
    }

    isGameFinished(position, symbol)
    {
        var board = this.getBoard(), winningCondition = [];
        var conditionsWithPosition = this.conditions.filter(condition => condition.indexOf(position) !== 0);
        this.status =  conditionsWithPosition.some(function(condition){
            winningCondition = condition;
            return condition.every(cell => symbol == board[cell]);
        });
        this.winningCondition = winningCondition;
        return this.status;
    }

    getWinningCondition()
    {
        return this.status ? this.winningCondition : '';
    }
}