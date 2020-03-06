const prompt = require('prompt-sync')();
class Player
{
    constructor(name, symbol)
    {
        this.symbol = symbol;
        this.name = name;
    }
    getSymbol()
    {
        return this.symbol;
    }

    getName()
    {
        return this.name;
    }

    getPosition()
    {
        const position = prompt('Enter Position');
        return position;
    }
}

module.exports =
{
    Player : Player
}