class Board
{
    constructor()
    {
        this.board = ['','','','','','','','',''];
        this.conditions = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];
    }
    
    setSymbol(position, symbol)
    {
        this.board[position] = symbol;
        this.displayBoard();
    }

    tester(position, symbol)
    {
        var conditionsWithPosition = this.conditions.filter(condition => condition.indexOf(position) !== 0), board = this.board;
        return conditionsWithPosition.some(function(condition)
        {
            return condition.every(cell => symbol == board[cell]);
        });
    }

    displayBoard()
    {
        console.log(this.board.slice(0,3));
        console.log(this.board.slice(3,6));
        console.log(this.board.slice(6,9));
        return ;
    }
}

module.exports =
{
    Board : Board
};