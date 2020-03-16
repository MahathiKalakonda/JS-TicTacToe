class consoleAndPrompt
{
    displayResult(playerName, gameFinished)
    {
        gameFinished ? console.log(playerName + " won") : console.log("Draw Match");
        return 0;
    }
}

module.exports = {
consoleAndPrompt:consoleAndPrompt
}