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
}