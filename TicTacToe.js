var TurnsRemaining = 9,gameStatus=false;
var gameStatus = false;
var scores = [0,0];
function myFunction(position)
{
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

function resetBoard()
{
    for(var id=0; id<=8; id++)
    {
        document.getElementById(id).innerHTML='';
        document.getElementById(id).style.backgroundColor = "white";
    }
    document.getElementById("currentPlayer").innerHTML = "1st Player"
    document.getElementById("status").innerHTML = ''
    TurnsRemaining = 9;
    gameStatus = false;
}