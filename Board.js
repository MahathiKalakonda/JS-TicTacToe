class Board
{
    board = [];
    conditions = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

    constructor()
    {
        this.board[10] = 0;
    }

    setSymbol(position, symbol)
    {
        this.board[position] = symbol;
        this.displayBoard();
    }

    tester(position, symbol)
    {
        var conditionsWithPosition = this.conditions.filter(condition => condition.includes(position));
        return conditionsWithPosition.some(this.areSymbolsSame, symbol);
    }

    areSymbolsSame(condition)
    {
        return condition.every(cell => cell == this);
    }

    displayBoard()
    {
        console.log(this.board.slice(0,10));
        return ;
    }
}

module.exports =
{
    Board : Board
};