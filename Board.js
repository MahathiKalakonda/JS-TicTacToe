class Board
{
    board = [];
    conditions = [[0,1,2],[0,3,6],[0,4,8],[3,4,5],[6,7,8],[1,4,7],[2,5,8],[2,4,6]];

    constructor()
    {
        board[10] = 0;
    }

    function setSymbol(position, symbol)
    {
        board[position] = symbol;
    }

    function tester(position)
    {
        var conditionsWithPosition = conditions.filter(condition => condition.includes(position));
        return conditionsWithPosition.some(areSymbolsSame, symbol);
    }

    function areSymbolsSame(condition)
    {
        return condition.every(cell => cell == this);
    }
}

module.exports =
{
    Board : Board;
};