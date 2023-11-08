let gameMode = document.getElementById("gamemode");
let numCells;
let grid = document.getElementById("grid");
let playBtn = document.getElementById("playBtn");
let squareDim;

/*** PULSANTE PLAY AVVIO GIOCO ***/
playBtn.addEventListener("click", function() {
    
    /** SVUOTA IL CAMPO DI GIOCO ***/
    grid.innerHTML = "";

    /*** VERIFICA MODALITA DI GIOCO ***/
    if(gameMode.value == 1){
        numCells = 100;
        squareDim = "squareEasy"
    }else if(gameMode.value == 2){
        numCells = 81;
        squareDim = "squareMedium"
    }else{
        numCells = 49;
        squareDim = "squareDifficult"
    }



    for (let i = 1; i <= numCells; i++){
        let oneCell = buildSquare(i);
        grid.appendChild(oneCell);
        oneCell.innerHTML = i;
    }
});





/*** FUNZIONE CREA QUADRATI***/
function buildSquare(number) {
    const cell = document.createElement("div");
    cell.classList.add(squareDim);

    cell.addEventListener("click", function(){
        cell.classList.toggle("selected");
    });
    return cell;
}