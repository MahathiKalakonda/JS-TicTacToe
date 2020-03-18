class Board
{
    constructor()
    {
        this.conditions = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
    }

    setSymbol(position, symbol)
    {
        document.getElementById(position).innerHTML = symbol;
        return 0;
    }

    getBoard()
    {
        var board = ['','','','','','','','',''];
        return board.map(function(element, index)
            {
                return document.getElementById(index).innerHTML;
            })
    }

    isGameFinished(position, symbol)
    {
        var board = this.getBoard();
        var conditionsWithPosition = this.conditions.filter(condition => condition.indexOf(position) !== 0);
        return status =  conditionsWithPosition.some(function(condition)
        {
            return condition.every(cell => symbol == board[cell]);
        });
    }

}