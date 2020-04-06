var TurnsRemaining = 9, gameStatus = false, scores = [ 0, 0];

function createEventListeners()
{
    var cells = document.getElementsByClassName("box");
    for(let index = 0; index < cells.length; index++)
        cells[index].addEventListener("click", startGame);
}

function startGame()
{
    let position = event.target.id;
    if(gameStatus || document.getElementById(position).innerHTML)
        return 0;
    var ticTacToeController = new GameController([new Player("2nd Player",'O'), new Player("1st Player",'X')], new Board());
    ticTacToeController.play(position,TurnsRemaining);
    gameStatus=ticTacToeController.getGameFinished();
    TurnsRemaining--;
}

function resetStatus()
{
    var ticTacToeController = new GameController();
    ticTacToeController.resetDisplay();
    TurnsRemaining = 9;
    gameStatus = false;
}

window.onload = createEventListeners;