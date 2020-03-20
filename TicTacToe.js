var TurnsRemaining = 9, gameStatus = false, scores = [ 0, 0];

function createEventListeners()
{
    for(let index = 0; index < 9; index++)
        document.getElementById(index).addEventListener("click", startGame)
}

function startGame()
{
    let position = event.target.id;
    if(gameStatus || document.getElementById(position).innerHTML)
        return 0;
    var ticTacToeController = new GameController([new Player("2nd Player",'O'), new Player("1st Player",'X')]);
    ticTacToeController.play(position,TurnsRemaining);
    gameStatus=ticTacToeController.getGameFinished();
    TurnsRemaining--;
    displayStatus(ticTacToeController);
}

function displayStatus(ticTacToeController)
{
    if(gameStatus || TurnsRemaining == 0)
    {
        document.getElementById("status").innerHTML = ticTacToeController.getFinalStatus(TurnsRemaining);
        ticTacToeController.updateScores(TurnsRemaining);
        ticTacToeController.highlightWinningPattern();
    }
    else
        document.getElementById("currentPlayer").innerHTML = ticTacToeController.getCurrentPlayer(TurnsRemaining);
}

function resetStatus()
{
    var ticTacToeController = new GameController();
    ticTacToeController.resetDisplay();
    document.getElementById("currentPlayer").innerHTML = "1st Player"
    document.getElementById("status").innerHTML = ''
    TurnsRemaining = 9;
    gameStatus = false;
}

window.onload = createEventListeners;