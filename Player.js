const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class Player
{
    position = 0;
    constructor(name, symbol)
    {
        this.name = name;
        this.symbo = symbol;
    }
    get symbol()
    {
        return this.symbo;
    }
    get position()
    {
        // get position from console
        return ;
    }
}

module.exports =
{
    Player : Player
}