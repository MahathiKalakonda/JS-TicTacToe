const prompt = require('prompt-sync')();

class consoleAndPrompt
{
    displayResult(playerName, gameFinished)
    {
        gameFinished ? console.log(playerName + " won") : console.log("Draw Match");
        return 0;
    }

    displayBoard(board)
    {
        console.log(board.slice(0,3));
        console.log(board.slice(3,6));
        console.log(board.slice(6,9));
        return 0;
    }

    getPosition(playerName)
    {
        return prompt('Enter Position of '+ playerName + ' : ');
    }
}

module.exports = {
consoleAndPrompt:consoleAndPrompt
}