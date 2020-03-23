class InputAndOutput
{
    emptyBoard()
    {
        for(var id=0; id<=8; id++)
        {
            document.getElementById(id).innerHTML='';
            document.getElementById(id).style.backgroundColor = "white";
        }
    }

    resetPlayerStatus()
    {
        document.getElementById("currentPlayer").innerHTML = "1st Player"
        document.getElementById("status").innerHTML = ''
    }

    displaySymbol(position, symbol)
    {
        document.getElementById(position).innerHTML = symbol;
        return 0;
    }

    highlightBackground(pattern)
    {
        for(var index = 0; index < pattern.length; index++)
            document.getElementById(pattern[index]).style.backgroundColor = "gold";
    }

    displayUpdatedScore(name, score)
    {
        document.getElementById(name).innerHTML = name + " : " + score;
    }

    displayFinalStatus(finalStatus)
    {
        document.getElementById("status").innerHTML = finalStatus;
    }

    displayCurrentPlayer(currentPlayer)
    {
        document.getElementById("currentPlayer").innerHTML = currentPlayer;
    }

    getGameBoard()
    {
        var board = ['','','','','','','','',''];
        return board.map(function(element, index)
            {
                return document.getElementById(index).innerHTML;
            })
    }
}